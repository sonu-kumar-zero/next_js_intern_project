"use client";
import React, { useState } from 'react';
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

type options = {
    icons: any;
    title: string;
    optionsList: string[]
}

type propsDropOptionsType = {
    data: options
}

const DropOptions = ({ data }: propsDropOptionsType) => {

    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

    return (
        <div>
            <div className=" text-[#ccc] flex flex-col gap-1">
                <button className="hover:bg-[#18202b] py-2 pl-5 pr-2 flex justify-between items-center" onClick={() => {
                    setIsMenuOpen((prev) => !prev);
                }}>
                    <div className="flex items-center gap-2">
                        {data.icons}
                        <div className="">{data.title}</div>
                    </div>
                    <div className="">
                        {
                            isMenuOpen ? <TbChevronUp size={20} /> : <TbChevronDown size={20} />
                        }
                    </div>
                </button>
                {
                    isMenuOpen && <>
                        {
                            data.optionsList.map((opt, index) =>
                                <button className="hover:bg-[#18202b] py-1 pl-14 flex justify-start" key={index}>{opt}</button>
                            )
                        }

                    </>
                }

            </div>
        </div>
    )
}

export default DropOptions