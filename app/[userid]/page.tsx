"use client"
import { useCurrentUser, useGetUserByID } from '@/hooks/user';
import React, { useCallback, useMemo } from 'react'
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa6";
import { useGetAllTweets } from '@/hooks/tweet';
import TweetCard from '@/components/TweetCard';
import { Tweet } from '@/gql/graphql';
import { useRouter, usePathname } from 'next/navigation';
import { graphQLClient } from '@/clients/api';
import { followUserMutation, unfollowUserMutation } from '@/graphql/mutation/user';
import { useQueryClient } from '@tanstack/react-query';

const Profile = () => {
    const router = useRouter();
    const pathname = usePathname();
    const {user} = useGetUserByID(pathname.substring(1) as string)
    const currentUser = useCurrentUser();
    const queryClient = useQueryClient();
    const isFollowing = useMemo(() => {
        if(!user || !currentUser) return false;
        return user?.followers?.some((f: any) => f.id === currentUser?.user?.id)
    }, [currentUser, user])

    const handleFollowUser = useCallback( async () => {
        if(!user) return;
        await graphQLClient.request(followUserMutation, { to: user?.id })
        await queryClient.invalidateQueries(["currentUser"]);
    }, [queryClient, user])
    const handleUnFollowUser = useCallback( async () => {
        if(!user) return;
        await graphQLClient.request(unfollowUserMutation, { to: user?.id })
        await queryClient.invalidateQueries(["currentUser"]);
    }, [queryClient, user])
  return (
    <div className='col-span-6 border border-r-[1px] border-l-[1px] border-gray-600 h-full overflow-auto no-scrollbar'>
        <div className='flex gap-5 p-4 items-center'>
            <div className="cursor-pointer hover:bg-slate-600 rounded-full transition-all p-2">
            <FaArrowLeft onClick={() => router.push("/")}/>
            </div>
            <div>
                {user?.firstName} {user?.lastName}
                <div className='text-slate-400 text-sm mt-1'>
                    {user?.tweets?.length} Tweets
                </div>
            </div>
        </div>  
        <div className='h-[150px] bg-slate-300'>
        </div>
        {user?.profileImageURL ? (
            <div className='flex justify-between'>
            <div>
                <Image
                src={user?.profileImageURL}
                width={120}
                height={120}
                alt='user-img'
                className='rounded-full mt-[-55px] ml-5'
                />
            </div>
            {currentUser?.user?.id !== user?.id && (
                <>
                {isFollowing ? (
            <button type='button' onClick={handleUnFollowUser} className='bg-white rounded-full h-fit px-3 py-1 m-2 text-black'>
                Unfollow
            </button>
                ) : (
                    <button type='button' onClick={handleFollowUser} className='bg-white rounded-full h-fit px-3 py-1 m-2 text-black'>
                Follow
            </button>
                )}
                </>
            )}
            </div>
        ) : (
            <div className='flex justify-between'>
            <div className='h-[120px] w-[120px] rounded mt-[-55px] ml-5'>
            </div>
            {currentUser?.user?.id !== user?.id && (
                <>
                {isFollowing ? (
                    <button type='button' onClick={handleUnFollowUser} className='bg-white rounded-full h-fit px-3 py-1 m-2 text-black'>
                    Unfollow
                </button>
                ) : (
            <button type='button' onClick={handleFollowUser} className='bg-white rounded-full h-fit px-3 py-1 m-2 text-black'>
                Follow
            </button>
                )}
                </>
            )}
            </div>
        )}
        <span className='ml-5 text-xl'>
            {user?.firstName} {user?.lastName}
        </span>
        <div className='ml-5 flex gap-4 mt-2 mb-2 text-gray-400'>
            <span>{user?.following?.length} Following</span>
            <span>{user?.followers?.length} Followers</span>
        </div>
        <div>
            {user?.tweets?.map((tweet) => <TweetCard tweets={tweet as Tweet} key={tweet?.id} />)}
        </div>
    </div>
  )
}

export default Profile