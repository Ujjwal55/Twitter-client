import React from "react"
import Image from "next/image"
import { BiMessageRounded, BiUpload } from "react-icons/bi"
import {FaRetweet} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"

const TweetCard = () => {
  return (
    <div>
      <div className="grid grid-cols-12 p-4 hover:bg-slate-900 cursor-pointer transition-all border border-b-[0.5px] border-gray-600 gap-2">
        <div className="col-span-1">
          <Image src="https://avatars.githubusercontent.com/u/10692823?v=4" alt="user-image" height={50} width={50}/>
        </div>
        <div className="col-span-11">
          Dummy Name
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error deleniti optio mollitia harum quae reprehenderit minus asperiores sapiente illo eligendi temporibus pariatur totam eaque, in assumenda et nihil quidem beatae?</p>
        <div className="flex justify-between mt-5 text-lg w-[90%]">
          <div>
            <BiMessageRounded/>
          </div>
          <div>
            <FaRetweet/>
          </div>
          <div>
            <AiOutlineHeart/>
          </div>
          <div>
            <BiUpload/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TweetCard