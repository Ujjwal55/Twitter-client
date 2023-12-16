import React from 'react'
import { BiHash, BiHomeCircle, BiUser } from 'react-icons/bi'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'

interface TwitterSideBarButton{
    title: string;
    icon: React.ReactNode;
  }
  
const twitterSideBarButtons: TwitterSideBarButton[] = [
    {
      title: "Home",
      icon: <BiHomeCircle/>
    },
    {
      title: "Explore",
      icon: <BiHash/>
    },
    {
      title: "Notifications",
      icon: <BsBell/>
    },
    {
      title: "Messages",
      icon: <BsEnvelope/>
    },
    {
      title: "Bookmarks",
      icon: <BsBookmark/>
    },
    {
      title: "Profile",
      icon: <BiUser/>
    }
  ]
const SideBar = () => {
  return (
    <div className='col-span-3 flex flex-col justify-start pt-4 m-2'>
          <div className="text-4xl h-fit w-fit hover:bg-gray-500 rounded-full p-2 cursor-pointer transition-all">
          <BsTwitter/>
          </div>
          <div>
            <ul className='mt-4 font-bold'>
            {twitterSideBarButtons.map(item => <li key={item.title} className='flex gap-2 justify-start items-center w-fit hover:bg-gray-500 cursor-pointer rounded-full p-3'><span>{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <button type="button" className='bg-[#1d9bf0] font-semibold rounded-full px-10 py-2 mt-4 w-full hover:active:ring-1'>
              Tweet
            </button>
          </div>
        </div>
  )
}

export default SideBar