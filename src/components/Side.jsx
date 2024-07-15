import { CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import Message from "./Message";
import { useState } from "react";
import { colors, firstLetter } from "../utils/common";
import HamburgerMenu from "./HamburgerMenu";
const Side = ({ users }) => {

    const [userData, setUserData] = useState({
        id: "",
        name: ""
    })
    const [isActive, setisActive] = useState(-1)
    const [openMenu, setOpenMenu] = useState(false)
    const [search, setSearch] = useState("")
    const handleSubmit = (id, name, index) => {
        setUserData({
            id,
            name
        })
        setisActive(index)
    }
    const newData = users?.data?.filter((i) => {
        if (i.creator.name ? i.creator.name.toLowerCase().includes(search.toLowerCase()) : "Anonymous") {
            return i
        }
    })
    return (

        <div className=" transition-all flex flex-1">
            <div className={`w-full ${isActive !== -1 ? "hidden" : "block"} md:block  md:w-[28%] dark:text-custom-dark-primary-text bg-custom-bg-light dark:bg-custom-bg-dark p-4 border-r  border-gray-300 `}>
                <div className=" sticky bg-custom-bg-light dark:bg-custom-bg-dark  p-2 top-0  z-20 flex justify-start mb-4 -mt-2 gap-2  items-center">
                    <span onClick={() => setOpenMenu((prev) => !prev)} className=" relative cursor-pointer font-thin text-xl md:text-2xl transition-all active:bg-gray-200  hover:rounded-full "><HiBars3 /></span>
                    {
                        openMenu && <div className=" bg-custom-bg-light dark:bg-custom-bg-dark dark:text-custom-dark-primary-text shadow-custom -left-2 absolute top-12 w-64 rounded-md p-2  max-h-96">
                            <HamburgerMenu />
                        </div>
                    }
                    <div className="flex w-full ml-3 py-1 px-2 hover:border-custom-primary hover:text-custom-dark-primary-text rounded-full border-[1px] border-gray-500 items-center gap-2">
                        <span className="text-xl md:text-2xl " ><CiSearch /></span>
                        <input onChange={(e) => setSearch(e.target.value)} className=" bg-transparent text-custom-primary-text dark:text-custom-dark-primary-text text-sm md:text-lg outline-none w-full" placeholder="Search" type="text" />
                    </div>
                </div>

                <div className="space-y-4 max-h-[90%]  overflow-y-auto no-scrollbar scroll-smooth ">
                    {/* Chat list items */}
                    {
                        newData?.map((user, index) => (

                            <div key={user.id} onClick={() => handleSubmit(user?.id, user?.creator?.name, index)} className={`flex items-center space-x-4 p-2 rounded-lg  ${isActive === index ? "bg-custom-primary text-custom-bg-light dark:bg-custom-dark-primary dark:text-custom-dark-primary-text " : "hover:bg-gray-200 dark:hover:bg-gray-800"}  cursor-pointer`}>


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
                userData?.id && isActive !== -1 && <Message setisActive={setisActive} id={userData.id} name={userData.name} />
            }




        </div >
    )
}

export default Side