"use client"
import { graphQLClient } from '@/clients/api';
import AddTweet from '@/components/AddTweet';
import GoogleLoginBtn from '@/components/GoogleLoginBtn';
import SideBar from '@/components/SideBar';
import TweetCard from '@/components/TweetCard';
import { Tweet } from '@/gql/graphql';
import { verifyUserGoogleToken } from '@/graphql/query/user';
import { useGetAllTweets } from '@/hooks/tweet';
import { useCurrentUser } from '@/hooks/user';
import {CredentialResponse, GoogleLogin} from "@react-oauth/google"
import { useQueryClient } from '@tanstack/react-query';
import React, { useCallback } from 'react';
import toast from 'react-hot-toast';


export default function Home() {
  const {tweets} = useGetAllTweets()
  return (
        <div className='col-span-6 border border-r-[1px] border-l-[1px] border-gray-600 h-full overflow-auto no-scrollbar'>
          <AddTweet/>
          {tweets?.map(tweet => tweet ? <TweetCard key={tweet?.id} tweets={tweet as Tweet} /> : null)}
        </div>
  )
}
