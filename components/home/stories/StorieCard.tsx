import Image from 'next/image'
import React from 'react'

type storie = {
    imageUrl: string;
    title: string;
    content: string;
};

type propsStorieCard = {
    data: storie
}

const StorieCard = ({ data }: propsStorieCard) => {
    const { content, imageUrl, title } = data;
    return (
        <div>
            <div className="shadow-md hover:shadow-xl rounded-md cursor-default">
                <div className="">
                    <Image src={imageUrl} alt="mountain" width={500} height={500} className='max-h-[150px] md:max-h-[250px] rounded-t-md object-cover' />
                </div>
                <div className="p-5">
                    <div className="font-semibold line-clamp-1">{title}</div>
                    <div className="text-sm">{content}</div>
                </div>
            </div>
        </div>
    )
}

export default StorieCard