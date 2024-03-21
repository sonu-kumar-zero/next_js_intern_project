"use client";
import React, {
  useState
} from 'react';
import Image from 'next/image';
import { TbBellFilled, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import DropOptions from './DropOptions';

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState<Boolean>(false);

  return (
    <>
      {
        isNavbarOpen &&
        <div className="hidden lg:block md:w-[35dvw] md:min-w-[300px] min-h-[100dvh] text-white bg-[#232f3e]">
          <div className="flex items-center justify-between px-5 py-3 border-b-4 border-[#405671]">
            <div className="flex items-center gap-2">
              <div className="">
                <Image src={"/data/image/penguin.jpg"} alt="profile" width={50} height={50} className="rounded-full min-w-[50px] min-h-[50px] max-h-[50px] max-w-[50px] object-cover" />
              </div>
              <div className="">Hello, User</div>
            </div>
            <div className="relative w-fit">
              <div className="">
                <TbBellFilled size={28} />
              </div>
              <div className="absolute w-[8px] h-[8px] top-0 right-1 bg-red-500 rounded-full"></div>
            </div>

          </div>
          <div className="w-full flex flex-col py-3 gap-1">
            <DropOptions />
            <DropOptions />
          </div>
        </div>
      }
      <div className="h-[100dvh] items-center hidden md:flex" >
        <button className="bg-[#232f3e] text-white w-fit px-2 py-20" onClick={() => { setIsNavbarOpen((prev) => !prev) }}>
          {
            isNavbarOpen ? <TbChevronLeft size={20} /> : <TbChevronRight size={20} />
          }
        </button>
      </div>

      <div className="absolute top-0 left-0 lg:hidden flex">
        {
          isNavbarOpen &&
          <div className="">
            <div className="w-[80dvw] md:w-[50dvw] min-h-[100dvh] text-white bg-[#232f3e]">
              <div className="flex items-center justify-between px-5 py-3 border-b-4 border-[#405671]">
                <div className="flex items-center gap-2">
                  <div className="">
                    <Image src={"/data/image/penguin.jpg"} alt="profile" width={50} height={50} className="rounded-full min-w-[50px] min-h-[50px] max-h-[50px] max-w-[50px] object-cover" />
                  </div>
                  <div className="">Hello, User</div>
                </div>
                <div className="relative w-fit">
                  <div className="">
                    <TbBellFilled size={28} />
                  </div>
                  <div className="absolute w-[8px] h-[8px] top-0 right-1 bg-red-500 rounded-full"></div>
                </div>

              </div>
              <div className="w-full flex flex-col py-3 gap-1">
                <DropOptions />
                <DropOptions />
              </div>
            </div>
          </div>
        }
        <div className="h-[100dvh] flex items-center" >
          <button className="bg-[#232f3e] text-white w-fit px-2 py-20" onClick={() => { setIsNavbarOpen((prev) => !prev) }}>
            {
              isNavbarOpen ? <TbChevronLeft size={20} /> : <TbChevronRight size={20} />
            }
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar