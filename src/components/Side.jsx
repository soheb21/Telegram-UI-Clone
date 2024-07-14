import { CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import Message from "./Message";
import { useState } from "react";
import { colors, firstLetter } from "../utils/common";
const Side = ({ users }) => {


    const [userData, setUserData] = useState({
        id: "",
        name: ""
    })
    const [isActive, setisActive] = useState(-1)
    const handleSubmit = (id, name, index) => {
        setUserData({
            id,
            name
        })
        setisActive(index)

    }

    console.log(isActive)


    return (

        <div className=" transition-all flex flex-1">
            <div className={`w-full ${isActive !== -1 ? "hidden" : "block"} md:block  md:w-[28%] bg-gray-100 p-4 border-r  border-gray-300 `}>
                <div className=" sticky bg-gray-100 p-2 top-0  z-20 flex justify-start mb-4 -mt-2 gap-2  items-center">
                    <span className="font-thin text-xl md:text-2xl transition-all active:bg-gray-200  hover:rounded-full "><HiBars3 /></span>
                    <div className="flex w-full ml-3 p-2 hover:border-[#3591ec] hover:text-[#3591ec] rounded-full border-[1px] border-gray-500 items-center gap-2">
                        <span className="text-xl md:text-2xl " ><CiSearch /></span>
                        <input className=" bg-transparent text-black text-sm md:text-lg outline-none w-full" placeholder="Search" type="text" />
                    </div>
                </div>

                <div className="space-y-4 max-h-[90%]  overflow-y-auto no-scrollbar scroll-smooth ">
                    {/* Chat list items */}
                    {
                        users.data.map((user, index) => (

                            <div key={user.id} onClick={() => handleSubmit(user?.id, user?.creator?.name, index)} className={`flex items-center space-x-4 p-2 rounded-lg  ${isActive === index && "bg-[#3390ec] text-white  hover:bg-[#3390ec]"} hover:bg-gray-200 cursor-pointer`}>


                                <div className={`w-12 h-12 text-white ${colors[Math.floor(user.id) % 10]} relative rounded-full`}>
                                    <p className="absolute w-full uppercase text-xl h-full grid place-content-center">
                                        {firstLetter(user?.creator.name ? user?.creator?.name : "A")}
                                    </p>
                                </div>
                                <div className="transition-all">
                                    <div className="font-semibold">{user?.creator.name ? user?.creator?.name : "Anonymous"}</div>
                                    <div className={`text-sm ${isActive === index ? "text-white" : "text-gray-500"} `}>Last message...</div>
                                </div>

                            </div>

                        ))
                    }

                    {/* Repeat above div for more chat items */}
                </div>


            </div>
            {
                userData.id && isActive !== -1 && <Message setisActive={setisActive} id={userData.id} name={userData.name} />
            }




        </div >
    )
}

export default Side