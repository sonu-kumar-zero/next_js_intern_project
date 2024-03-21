"use client";
import React,{useState} from 'react';
import { FiMessageSquare } from "react-icons/fi";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const DropOptions = () => {

    const [isMenuOpen,setIsMenuOpen] = useState<Boolean>(false);

    return (
        <div>
            <div className=" text-[#ccc] flex flex-col gap-1">
                <div className="hover:bg-[#18202b] py-2 pl-5 pr-2 flex justify-between items-center" onClick={()=>{
                    setIsMenuOpen((prev)=> !prev);
                }}>
                    <div className="flex items-center gap-2">
                        <FiMessageSquare size={24} />
                        <div className="">Disscussion Fourm</div>
                    </div>
                    <div className="">
                        {
                           isMenuOpen ?  <TbChevronUp size={20} /> : <TbChevronDown size={20} />
}
                    </div>
                </div>
                {
                    isMenuOpen && <>
                    <div className="hover:bg-[#18202b] py-1 pl-14">Sentiment</div>
                <div className="hover:bg-[#18202b] py-1 pl-14">Market</div>
                <div className="hover:bg-[#18202b] py-1 pl-14">Sector</div>
                <div className="hover:bg-[#18202b] py-1 pl-14">WatchList</div>
                <div className="hover:bg-[#18202b] py-1 pl-14">Events</div>
                <div className="hover:bg-[#18202b] py-1 pl-14">News/Interview</div>
                    </>
                }
                
            </div>
        </div>
    )
}

export default DropOptions