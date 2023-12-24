"use client"
import React from 'react'
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import UserProfile from './UserProfile';
import { useCurrentUser } from '@/hooks/user';
import Link from 'next/link';

interface TwitterSideBarButton{
    title: string;
    icon: React.ReactNode;
    link: string;
  }
  
  const SideBar = () => {
    const {user} = useCurrentUser();
  const twitterSideBarButtons: TwitterSideBarButton[] = [
      {
        title: "Home",
        icon: <BiHomeCircle/>,
        link: "/"
      },
      {
        title: "Explore",
        icon: <BiHash/>,
        link: "/"
      },
      {
        title: "Notifications",
        icon: <BsBell/>,
        link: "/"
      },
      {
        title: "Messages",
        icon: <BsEnvelope/>,
        link: "/"
      },
      {
        title: "Bookmarks",
        icon: <BsBookmark/>,
        link: "/"
      },
      {
        title: "Profile",
        icon: <BiUser/>,
        link: `/${user?.id}`
      }
    ]
  return (
    <div className='col-span-3 flex flex-col justify-start pt-4 m-2'>
    <div>
          <div className="text-4xl h-fit w-fit hover:bg-gray-500 rounded-full p-2 cursor-pointer transition-all">
          <BsTwitter/>
          </div>
          <div>
            <ul className='mt-4 font-bold'>
            {twitterSideBarButtons.map(item => <Link key={item.title} className='flex gap-2 justify-start items-center w-fit hover:bg-gray-500 cursor-pointer rounded-full p-3' href={item?.link}><span>{item.icon}</span><span>{item.title}</span></Link>)}
            </ul>
            <button type="button" className='bg-[#1d9bf0] font-semibold rounded-full px-10 py-2 mt-4 w-full hover:active:ring-1'>
              Tweet
            </button>
          </div>
        </div>
        <div>
      <UserProfile/>
        </div>
    </div>
  )
}

export default SideBar