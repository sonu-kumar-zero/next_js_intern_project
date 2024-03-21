"use client";
import React, { useState } from 'react';
import StorieCard from "@/components/home/stories/StorieCard";
import CommentCard from "@/components/home/comments/CommentCard";
import comments from '@/public/data/text/comments';
import stories from '@/public/data/text/stories';

const HomeMobile = () => {
    const [isDiscussionForm, SetIsDiscussionForm] = useState<boolean>(true);
    return (
        <>
            <div className="block md:hidden h-[100dvh]">
                <div className="flex h-fit text-sm w-full items-center justify-around pb-2">
                    <div className="px-5 py-2 text-red-400 font-bold w-full border"
                        style={{
                            backgroundColor: `${isDiscussionForm ? "#232f3e" : "#3b4f67"}`
                        }}
                        onClick={() => SetIsDiscussionForm(true)}>DISSCUSSION FOURM</div>
                    <div className="px-5 py-2 text-red-400 font-bold w-full border"
                        style={{
                            backgroundColor: `${isDiscussionForm ? "#3b4f67" : "#232f3e"}`
                        }}
                        onClick={() => SetIsDiscussionForm(false)}>MARKET STORIES</div>
                </div>
                <div className="flex flex-col gap-5 max-h-full overflow-y-scroll px-5">
                    {
                        isDiscussionForm ? comments.map((obj, index) => <CommentCard data={obj} key={index} />
                        )
                            :
                            stories.map((obj, index) => <StorieCard data={obj} key={index} />
                            )}
                </div>
            </div>
        </>
    )
}

export default HomeMobile