import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Navbar = () => {
    const cartCount = useAppSelector((state) => state.cartReducer.length);

    return(
        <div className="pt-4 bg-white top-0 sticky px-4">
            <div className="container">    
                        <div className="md:flex hidden gap-3 items-center justify-between">

                            <div className="">
                                {/* <Link href="admin/dashboard"><button className="bg-pink text-white px-4 py-2 rounded-md mr-8 cursor-pointer">
                                    Admin-Panel
                                </button></Link> */}
                                <h2>Ecommerce admin panel</h2>
                            </div>
                            
                            <div className="w-[40px] h-[40px]">
                                <img src="/user.png" alt="user"/>
                            </div>
                        </div>
                        
                   
                </div>
                <div className="border-b border-gray-200 pt-4" />
            </div>
        
    )
}

export default Navbar;