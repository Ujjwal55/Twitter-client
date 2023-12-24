"use client"
import { useCurrentUser } from '@/hooks/user';
import React from 'react'
import Image from 'next/image';

const UserProfile = () => {
  const {user} = useCurrentUser();
  if(!user){
    return ""
  }
  return (
    <div className='flex p-3 gap-2 bg-slate-500 rounded-[20px] absolute bottom-2 items-center'>
    <div>
        {user?.profileImageURL && (
            <Image src={user?.profileImageURL} alt='user-img' height={20} width={20}/>
        )}
    </div>
    <div>
        {user?.firstName} {user?.lastName}
    </div>
    </div>
  )
}

export default UserProfile