import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import useFetchOne from '../hook/useFetchOne';
import { TiAttachment } from "react-icons/ti";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { colors, firstLetter } from '../utils/common';
import { IoArrowBackSharp } from "react-icons/io5";
import Spinner from '../utils/Spinner';


const Message = ({ id, name, isActive, setisActive }) => {

    const { data, loading, error } = useFetchOne("https://devapi.beyondchats.com/api/get_chat_messages?chat_id", id);
    const [isOpen, setIsOpen] = useState(false)

    if (loading) return <Spinner />
    if (error) return <div>Error: {error.message}</div>;


    return (

        <div className=" w-full md:flex-1 bg-transparent text-custom-primary-text dark:bg-transparent  dark:text-custom-dark-primary-text flex flex-col ">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-custom-bg-light dark:bg-custom-bg-dark  border-gray-300">
                <div className="flex items-start  space-x-4">
                    <div className="flex gap-2 items-center ">
                        <button className={`text-gray-500 ${isActive !== -1 && "block"} md:hidden`} onClick={() => setisActive(-1)}><IoArrowBackSharp /></button>

                        <div className={`w-12 grid place-content-center uppercase h-12 text-white ${colors[Math.floor(id) % 10]} relative rounded-full`}>
                            {firstLetter(name ? name : "A")}
                        </div>
                    </div>
                    <div className="flex-col ">
                        <p className="font-semibold">{name ? name : "Anonymous"}</p>
                        <p className=" text-xs w-[100px] ">last seen recently</p>
                    </div>
                </div>
                {
                    isOpen ? <div className="flex w-full ml-3 p-2 transition-all rounded-full shadow-custom items-center gap-2">
                        <span className="text-xl md:text-2xl " ><IoSearch /></span>
                        <input className=" bg-transparent text-black text-sm md:text-lg outline-none w-full" placeholder="Search" type="text" />
                        <span onClick={() => setIsOpen(!isOpen)} className="text-xl cursor-pointer md:text-2xl  " ><IoMdClose /></span>
                    </div>
                        : <div className="flex cursor-pointer gap-4 transition-all">
                            <span className='text-2xl text-gray-500  '><MdOutlinePhone /></span>
                            <span onClick={() => setIsOpen(!isOpen)} className='text-2xl  text-gray-500 '><IoSearch /></span>
                            <span className='text-2xl text-gray-500 '><HiOutlineDotsVertical /></span>
                        </div>
                }



            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                {/* Messages */}
                {
                    data && data.data?.map((mssg, ind) => (
                        <div key={mssg.id} className="space-y-4">
                            {
                                ind % 2 == 0
                                    ? (
                                        <div className="flex  my-8 items-start space-x-2">
                                            <div className={`w-12 grid place-content-center uppercase h-12 text-white ${colors[Math.floor(id) % 10]} relative rounded-full`}>
                                                {firstLetter(name ? name : "A")}
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-custom-bg-light dark:bg-custom-bg-dark dark:text-custom-dark-primary-text w-fit max-w-[50%]  p-1 rounded-lg rounded-bl-none">{mssg?.message}</div>
                                            </div>
                                        </div>

                                    )
                                    : (
                                        <div className="flex  items-start  justify-end w-full space-x-2">
                                            <div className=" bg-custom-bg-light dark:bg-custom-bg-dark dark:text-custom-dark-primary-text w-fit max-w-[50%] p-2 rounded-lg rounded-br-none">{mssg?.message}</div>

                                            <div className={`w-12 grid place-content-center uppercase h-12 text-white ${colors[7]} relative rounded-full`}>
                                                {firstLetter(mssg?.sender?.name || 'A')}
                                            </div>


                                        </div>
                                    )

                            }


                            {/* Repeat above div for more messages */}
                        </div>
                    ))
                }

            </div>
            <div className="flex bg-custom-bg-light dark:bg-custom-bg-dark items-center py-2 px-4 border-t border-gray-300">
                <span className='text-3xl cursor-pointer text-gray-400 mr-2'><TiAttachment /></span>
                <input
                    type="text"
                    placeholder="Write a message..."
                    className="w-full p-2 outline-none bg-transparent"
                />
                <div className="ml-2 flex gap-2 items-center">
                    <span className='text-2xl cursor-pointer text-gray-400'><BsEmojiSmile /></span>
                    <span className='text-2xl cursor-pointer text-gray-400'><MdOutlineKeyboardVoice /></span>
                </div>
            </div>
        </div>


    )
}

export default Message