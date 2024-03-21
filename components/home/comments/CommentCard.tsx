import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { LuShare2 } from "react-icons/lu";

const CommentCard = () => {
    return (
        <div>
            <div className="shadow-lg rounded-sm px-5 py-5 flex justify-between">
                <div className="flex gap-5">
                    <div className="">
                        <Image src={"/data/image/penguin.jpg"} alt="profile" width={50} height={50} className="rounded-full min-w-[50px] min-h-[50px] max-h-[50px] max-w-[50px] object-cover" />
                    </div>
                    <div className="">
                        <div className="flex gap-10 items-center">
                            <div className="font-semibold text-lg">Lorem Ipsum</div>
                            <div className="px-5 bg-blue-400 text-white rounded-full py-1">Sector 2</div>
                        </div>
                        <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, a rem! Enim distinctio libero tempore tenetur, hic quasi modi odit facere quod commodi possimus repudiandae placeat illo doloribus quos a!</div>
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <div className=""><FaRegHeart size={20}/></div>
                                <div className="">2k</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><FiEye size={20}/></div>
                                <div className="">2k</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><FiMessageSquare size={20}/></div>
                                <div className="">2k Comments</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><LuShare2 size={20}/></div>
                                <div className="">Share</div>
                            </div>

                        </div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="text-sm text-blue-400 min-w-[80px]">2 min ago</div>
            </div>
        </div>
    )
}

export default CommentCard