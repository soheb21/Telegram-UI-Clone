import React, { useEffect, useState } from 'react'
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { RiArchive2Line } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { FaStarOfDavid, FaRegCircleQuestion } from "react-icons/fa6";
import { GoBug, GoMoon } from "react-icons/go";
import { IoIosAddCircleOutline } from "react-icons/io";
import ToggleBtn from './ToggleBtn';

const HamburgerMenu = () => {
    const list = [
        {
            id: 1,
            icon: <FaRegBookmark />,
            iconname: "Saved Messages",
            link: "/saved_messages"
        },
        {
            id: 2,
            icon: <RiArchive2Line />,
            iconname: "Archived Chats",
            link: "/archived_chats"
        },
        {
            id: 3,
            icon: <BsClockHistory />,
            iconname: "My Stories",
            link: "/my_stories"
        },
        {
            id: 4,
            icon: <FaRegUser />,
            iconname: "Contacts",
            link: "/contacts"
        },
        {
            id: 5,
            icon: <FaStarOfDavid />,
            iconname: "Sitting",
            link: "/sitting"
        },
        {
            id: 6,
            icon: <GoMoon />,
            iconname: "Dark Mode",
            type: "toggle"

        },

        {
            id: 7,
            icon: <FaRegCircleQuestion />,
            iconname: "Telegram Features",
            link: "/telegram_features"

        },
        {
            id: 8,
            icon: <GoBug />,
            iconname: "Report Bug",
            link: "report_bug"

        },
        {
            id: 9,
            icon: 'A',
            iconname: "Switch to A version",
            link: "/switch_version"

        },
        {
            id: 10,
            icon: <IoIosAddCircleOutline />,
            iconname: "Install App",
            link: "/install_app"

        }

    ]


    return (
        <div className='flex flex-col justify-start w-full h-full'>
            {
                list.map((item) => (
                    <div key={item.id} className="flex justify-between w-full h-full items-center dark:hover:bg-gray-800 hover:bg-gray-100 py-1">
                        {
                            item.type !== "toggle"
                                ? (
                                    <div className="flex gap-2 justify-start items-center">
                                        <span className='ml-2'>{item?.icon}</span>
                                        <button>{item?.iconname}</button>
                                    </div>
                                )
                                : (
                                    <>
                                        <div className="flex gap-2 justify-start items-center">
                                            <span className='ml-2'>{item?.icon}</span>
                                            <button>{item?.iconname}</button>
                                        </div>
                                        <ToggleBtn id={item.id} />
                                    </>


                                )
                        }



                    </div>
                ))
            }
            <>


            </>
        </div>
    )
}

export default HamburgerMenu