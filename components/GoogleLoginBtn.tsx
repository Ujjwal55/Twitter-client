"use client"
import { graphQLClient } from '@/clients/api';
import { verifyUserGoogleToken } from '@/graphql/query/user';
import { useCurrentUser } from '@/hooks/user';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useQueryClient } from '@tanstack/react-query';
import React, { useCallback } from 'react'
import Image from 'next/image';
import toast from 'react-hot-toast';
import Link from 'next/link';

const GoogleLoginBtn = () => {
  const {user} = useCurrentUser();
  const queryClient = useQueryClient();
  const handleLogin = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if(!googleToken){
      return toast.error("Token not found")
    }
    try{
      const {verifyGoogleToken} = await graphQLClient.request(verifyUserGoogleToken, {token: googleToken})
      toast.success('Logged In')
      if(verifyGoogleToken){
        localStorage.setItem("twitter_clone", verifyGoogleToken)
        await queryClient.invalidateQueries({queryKey: ["currentUser"]});
      }
    } catch(err){
      toast.error("Log In Faied")
    }
  }, [queryClient])
  return (
    <div className='col-span-3 p-5'>
    {!user ? (
        <div className='col-span-3 p-5'>
          <span>New to Twitter?</span>
          <GoogleLogin onSuccess={handleLogin}/>
        </div>
        )
      : <div className='p-2 bg-slate-700 rounded-lg w-full'>
        <h1>Users you may know</h1>
        {user?.recommendedUsers?.map((e) => (
        <div key={e?.id} className='flex items-center gap-3 mt-5'>{
          e?.profileImageURL && (
            <Image
            src={e?.profileImageURL}
            alt="user-image"
            className='rounded-full'
            width={50}
            height={50}
            />
          )
        } 
        <Link className='hover:underline cursor-pointer' href={`/${e?.id}`}>{e?.firstName} {e?.lastName}</Link>
        </div>
      ))}
      </div>
      }
    </div>
  )
}

export default GoogleLoginBtn