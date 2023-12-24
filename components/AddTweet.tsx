"use client"
import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { FaFileImage } from "react-icons/fa";
import { useCurrentUser } from '@/hooks/user'
import { useCreateTweet } from '@/hooks/tweet';
import { graphQLClient } from '@/clients/api';
import { getSignedURLForTweetQuery } from '@/graphql/query/tweet';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddTweet = () => {
    const {user} = useCurrentUser()
    const [content, setContent] = useState("");
    const [imageURL, setImageURL] = useState("");
    const {mutate} = useCreateTweet()
    const handleInputChangeFile = useCallback((input: HTMLInputElement) => {
      return  async (event: Event) => {
        event.preventDefault();
        const file: File | null | undefined = input.files?.item(0);
        if(!file) return;
        const {getSignedURLForTweet} = await graphQLClient.request(getSignedURLForTweetQuery, {
          imageType: file.type
        })
        console.log("gggggg", getSignedURLForTweet);
        if(getSignedURLForTweet){
          toast.loading("Uploading...", {id: "2"})
          await axios.put(getSignedURLForTweet, file, {
            headers: {
              'Content-Type': file.type,
            }
          })
          toast.success("Uploaded!", {id: "2"})
          const url = new URL(getSignedURLForTweet)
          const filePath = `${url.origin}${url.pathname}`
          setImageURL(filePath)
        }
      }
    }, [])
    const handleImage = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        
        input.addEventListener("change", handleInputChangeFile(input))
        input.click();
    }, [handleInputChangeFile])
    const handleTweet = useCallback(() => {
      console.log("clicked", content);
      mutate({
        content,
        imageURL
      })
    }, [content, mutate, imageURL])
  return (
    <div className="grid grid-cols-12 p-4  transition-all border border-b-[0.5px] border-gray-600 gap-2">
        {user?.profileImageURL && (
         <div className="col-span-1">
          <Image src={user?.profileImageURL} className='rounded-[99px]' alt="user-image" height={50} width={50}/>
        </div>
        )}
        <div className='col-span-11'>
            <textarea value={content} onChange={e => setContent(e.target.value)} className='w-full bg-transparent font-xl px-2 border-b border-slate-800 outline-0' placeholder="What's happening?" rows={4}></textarea>
            {imageURL && <Image src={imageURL} alt='tweet-img' width={300} height={300}/>}
            <div className='flex justify-between mt-2 items-center'>
            <FaFileImage className='cursor-pointer' onClick={handleImage}/>
            <button type="button" className='bg-[#1d9bf0] rounded-full py-1 px-4 cursor-pointer' onClick={handleTweet}>Tweet</button> 
            </div>
        </div>
    </div>
  )
}

export default AddTweet