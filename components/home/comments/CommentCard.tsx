"use client";
import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";

const CommentCard = () => {

    return (
        <div>
            <div className="hidden lg:flex text-sm md:text-base shadow-lg rounded-sm p-3 md:p-5 justify-between">
                <div className="gap-1 flex md:gap-5">
                    <div className="">
                        <Image src={"/data/image/penguin.jpg"} alt="profile" width={50} height={50} className="rounded-full min-w-[40px] min-h-[40px] max-h-[40px] max-w-[40px] md:min-w-[50px] md:min-h-[50px] md:max-h-[50px] md:max-w-[50px] object-cover" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 md:gap-10 items-center">
                            <div className="font-semibold text-lg">Lorem Ipsum</div>
                            <div className={`px-5 bg-blue-500  text-white rounded-full py-1`} >Sector 2</div>
                        </div>
                        <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, a rem! Enim distinctio libero tempore tenetur, hic quasi modi odit facere quod commodi possimus repudiandae placeat illo doloribus quos a!</div>
                        <div className="flex justify-between md:text-base text-xs">
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><FaRegHeart size={20} /></div>
                                <div className="">2k</div>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><FiEye size={20} /></div>
                                <div className="">2k</div>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><FiMessageSquare size={20} /></div>
                                <div className="">2k Comments</div>
                            </div>
                            <div className="flex gap-1 md:gap-2 items-center">
                                <div className=""><LuShare2 size={20} /></div>
                                <div className="">Share</div>
                            </div>

                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className=" text-xs md:text-sm text-blue-400 min-w-[80px]">2 min ago</div>
            </div>
            <div className="flex lg:hidden shadow-lg rounded-sm p-2 py-4 gap-2">
                <Image src={"/data/image/penguin.jpg"} alt="profile" width={50} height={50} className="rounded-full min-w-[40px] min-h-[40px] max-h-[40px] max-w-[40px] md:min-w-[50px] md:min-h-[50px] md:max-h-[50px] md:max-w-[50px] object-cover" />
                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold text-lg">Lorem Ipsum</div>
                            <div className={`px-3 bg-blue-500  text-white rounded-full py-0`} >Sector 2</div>
                        </div>
                        <div className=" text-xs md:text-sm text-blue-400">2 min ago</div>
                    </div>
                    <div className="pr-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, accusamus minus. Magni illum suscipit error sunt ea ex beatae, nihil sint voluptates ratione expedita? Nihil quisquam optio fugit illum quaerat?
                    </div>
                    <div className="flex justify-between md:text-md text-xs">
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><FaRegHeart size={20} /></div>
                            <div className="">2k</div>
                        </div>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><FiEye size={20} /></div>
                            <div className="">2k</div>
                        </div>
                        <div className="flex gap-1 md:gap-2 items-center">
                            <div className=""><FiMessageSquare size={20} /></div>
                            <div className="">2k Comments</div>
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