"use client"
import { graphQLClient } from '@/clients/api';
import SideBar from '@/components/SideBar';
import TweetCard from '@/components/TweetCard';
import { verifyGoogleToken, verifyUserGoogleToken } from '@/graphql/query/user';
import {CredentialResponse, GoogleLogin} from "@react-oauth/google"
import React, { useCallback } from 'react';
import toast from 'react-hot-toast';


export default function Home() {
  const handleLogin = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if(!googleToken){
      return toast.error("Token not found")
    }
    const {verifyGoogleToken} = await graphQLClient.request(verifyUserGoogleToken, {token: googleToken})
    toast.success('Logged In')
    if(verifyGoogleToken){
      localStorage.setItem("twitter_clone", verifyGoogleToken)
    }
    console.log("aaaaaa", verifyGoogleToken);
  }, [])
  return (
    <main >
      <div className='grid grid-cols-12 h-screen w-screen'>
        <SideBar/>
        <div className='col-span-6 border border-r-[1px] border-l-[1px] border-gray-600'>
          <TweetCard/>
        </div>
        <div className='col-span-3 p-5'>
          <span>New to Twitter?</span>
          <GoogleLogin onSuccess={handleLogin}/>
        </div>
      </div>
    </main>
  )
}
