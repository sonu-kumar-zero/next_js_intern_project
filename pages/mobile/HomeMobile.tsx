"use client";
import React, { useState } from 'react';
import StorieCard from "@/components/home/stories/StorieCard";
import CommentCard from "@/components/home/comments/CommentCard";


const HomeMobile = () => {
    const [isDiscussionForm, SetIsDiscussionForm] = useState<boolean>(true);
    return (
        <>
            <div className="block md:hidden h-[100dvh]">
                <div className="flex h-fit text-sm w-full items-center justify-around pb-2">
                    <div className="px-5 py-2 bg-gray-300 text-red-400 font-bold w-full border"
                        onClick={() => SetIsDiscussionForm(true)}>DISSCUSSION FOURM</div>
                    <div className="px-5 py-2 bg-gray-300 text-red-400 font-bold w-full border"
                        onClick={() => SetIsDiscussionForm(false)}>MARKET STORIES</div>
                </div>
                <div className="flex flex-col gap-5 max-h-full overflow-y-scroll px-5">
                    {
                        isDiscussionForm ? <>
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                            <CommentCard />
                        </> :
                            <>
                                <StorieCard />
                                <StorieCard />
                                <StorieCard />
                                <StorieCard />
                                <StorieCard />
                                <StorieCard />
                                <StorieCard />
                                <StorieCard />
                            </>}
                </div>
            </div>
        </>
    )
}

export default HomeMobile