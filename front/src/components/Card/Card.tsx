import React from 'react'

interface Props {
    name: string;
    desc: string;
    imgs: string[];
    cardNum: string;
    profileImg: string;
}

function Card({ name, desc, imgs, cardNum, profileImg }: Props) {
  return (
    <div className="border border-gray-300 overflow-hidden shadow-sm rounded-lg p-4">
            <div className="mb-4">
                <p className="text-base font-semibold text-gray-800">{cardNum}</p>
            </div>
            <div className="my-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={profileImg}
                        alt={name}
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                        <p className="text-sm text-gray-600 font-medium">{desc}</p>
                    </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
                    See Collection
                </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {imgs.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Collection"
                        className="h-full w-full object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
  )
}

export default Card