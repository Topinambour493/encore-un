import React from 'react'
import { useNavigate } from 'react-router-dom'
import EventBoard from '../EventBoard/EventBoard';

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

function AdminDashboard() {
    const navigate = useNavigate()


    return (
        <div className="">
            <div className="">
                <h1> Users </h1>
                <EventBoard data={data} />
            </div>
            <div className="">
                <h1>Events</h1>
                <EventBoard data={data} />
            </div>
        </div>
    )
}

export default AdminDashboard