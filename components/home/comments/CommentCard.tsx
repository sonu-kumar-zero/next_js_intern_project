"use client";
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";

type commentsType = {
    imageUrl: string;
    title: string;
    time: number;
    content: string;
    likes: number;
    views: number;
    comments: number;
};

type CommentCardProps = {
    data: commentsType;
};

const CommentCard = ({ data }: CommentCardProps) => {
    const { imageUrl, title, time, content, likes, views, comments } = data;
    return (
        <div>
            <div className="hidden lg:flex text-sm md:text-base shadow-lg rounded-sm p-3 md:p-5 justify-between">
                <div className="gap-1 flex md:gap-5 w-full">
                    <div className="">
                        <Image src={imageUrl} alt="profile" width={50} height={50} className="rounded-full min-w-[40px] min-h-[40px] max-h-[40px] max-w-[40px] md:min-w-[50px] md:min-h-[50px] md:max-h-[50px] md:max-w-[50px] object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-2 md:gap-2 items-center">
                            <div className="font-semibold text-lg w-[200px] line-clamp-1">{title}</div>
                            <div className={`px-5 bg-blue-500  text-white rounded-full py-1`} >Sector 2</div>
                        </div>
                        <div className="">{content}</div>
                        <div className="flex justify-between md:text-base text-xs">
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><FaRegHeart size={20} /></div>
                                <div className="">{likes}k</div>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><FiEye size={20} /></div>
                                <div className="">{views}k</div>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><FiMessageSquare size={20} /></div>
                                <div className="">{comments}k Comments</div>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><LuShare2 size={20} /></div>
                                <div className="">Share</div>
                            </div>

                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className=" text-xs md:text-sm text-blue-400 min-w-[80px]">{time} min ago</div>
            </div>
            <div className="flex lg:hidden shadow-lg rounded-sm p-2 py-4 gap-2">
                <Image src={imageUrl} alt="profile" width={50} height={50} className="rounded-full min-w-[40px] min-h-[40px] max-h-[40px] max-w-[40px] md:min-w-[50px] md:min-h-[50px] md:max-h-[50px] md:max-w-[50px] object-cover" />
                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold text-lg overflow-x-hidden w-[120px] line-clamp-1">{title}</div>
                            <div className={`px-3 bg-blue-500 text-white rounded-full py-1 text-[0.8rem]`}>Sector 2</div>
                        </div>
                        <div className=" text-xs md:text-sm text-blue-400">{time} min ago</div>
                    </div>
                    <div className="pr-10">
                        {content}
                    </div>
                    <div className="flex justify-between md:text-md text-xs">
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><FaRegHeart size={20} /></div>
                            <div className="">{likes}k</div>
                        </div>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><FiEye size={20} /></div>
                            <div className="">{views}k</div>
                        </div>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><FiMessageSquare size={20} /></div>
                            <div className="">{comments}k Comments</div>
                        </div>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><LuShare2 size={20} /></div>
                            <div className="">Share</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard