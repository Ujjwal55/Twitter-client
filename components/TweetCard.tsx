"use client"
import React from "react"
import Image from "next/image"
import { BiMessageRounded, BiUpload } from "react-icons/bi"
import {FaRetweet} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import { Tweet } from "@/gql/graphql"
import Link from "next/link"

interface ITweetCardProps{ 
  tweets: Tweet;
}

const TweetCard = ({tweets}: ITweetCardProps) => {

  return (
    <div>
      <div className="grid grid-cols-12 p-4 hover:bg-slate-900 cursor-pointer transition-all border border-b-[0.5px] border-gray-600 gap-2">
        {tweets?.author?.profileImageURL && (
        <div className="col-span-1">
          <Image src={tweets?.author?.profileImageURL} alt="user-image" height={50} width={50} className="rounded-[99px]"/>
        </div>
        )} 
        <div className="col-span-11">
          <Link className="hover:underline" href={`/${tweets?.author?.id}`}>
          {tweets?.author?.firstName} {tweets?.author?.lastName}
          </Link>
          <p>{tweets?.content}</p>
          {tweets?.imageURL && tweets?.imageURL !== null && (
              <Image src={tweets?.imageURL} alt="tweet-image" height={500} width={500} />
          )}
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