import React from "react";
import Card from "../Card/Card";

const data = [
    {
        cardNum: "#1",
        profileImg: "https://www.material-tailwind.com/img/avatar1.jpg",
        name: "Tina Andrew",
        desc: "Creator",
        imgs: [
            "/image/web3-card-1.svg",
            "/image/web3-card-2.svg",
            "/image/web3-card-3.svg",
        ],
    },
    {
        cardNum: "#2",
        profileImg: "https://www.material-tailwind.com/image/avatar2.jpg",
        name: "Linde Michael",
        desc: "Creator",
        imgs: [
            "/image/web3-card-5-mini.svg",
            "/image/web3-card-6-mini.svg",
            "/image/web3-card-7-mini.svg",
        ],
    },
    {
        cardNum: "#3",
        profileImg: "https://www.material-tailwind.com/image/avatar7.svg",
        name: "Misha Stam",
        desc: "Creator",
        imgs: [
            "/image/web3-card-4.svg",
            "/image/web3-card-4.svg",
            "/image/web3-card-4.svg",
        ],
    },
];

interface Props {
    data: {
        cardNum: string;
        profileImg: string;
        name: string;
        desc: string;
        imgs: string[];
    }[];
}

function EventBoard({data}: Props) {
    return (
        <section className="px-8 py-10">
            <div className="border border-gray-300 rounded-lg shadow-md p-4">
                <div className="mb-8 flex items-start justify-between flex-wrap">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 mb-1">Top Creators</h1>
                        <p className="text-lg font-normal text-gray-600">
                            The most sought-after collections across the entire ecosystem.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
                            Last 24h
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
                            Last week
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg">
                            Last month
                        </button>
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 grid-cols-1 gap-4">
                    {data.map((props, key) => (
                        <Card key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EventBoard;
