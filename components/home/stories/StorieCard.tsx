import Image from 'next/image'
import React from 'react'

const StorieCard = () => {
    return (
        <div>
            <div className="shadow-md hover:shadow-xl rounded-md cursor-default">
                <div className="">
                    <Image src={"/data/image/mountain.jpg"} alt="mountain" width={500} height={500} className='max-h-[150px] md:max-h-[250px] rounded-t-md object-cover' />
                </div>
                <div className="p-5">
                    <div className="font-semibold">The Coldest Sunset</div>
                    <div className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil magnam fuga ratione neque voluptatibus culpa? Atque enim eum amet omnis, dolores sint repudiandae maxime velit dolor, in id vitae.</div>
                </div>
            </div>
        </div>
    )
}

export default StorieCard