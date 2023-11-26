import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";




const Footer1 = () => {
    return (
        <div className="mx-auto container py-20 xl:px-20 lg:px-12 sm:px-6 px-4 bg-black text-white">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                <div className="flex flex-col flex-shrink-0">
                    <div>
                        <h1 className="text-xl font-bold">E-MobileShop</h1>
                    </div>
                    <p className="text-sm leading-none text-white mt-4">Copyright © 2023 E-MobileShop</p>
                    <p className="text-sm leading-none text-white mt-4">All rights reserved</p>
                    
                </div>
                <div className="sm:ml-0 ml-8">
                    <h2 className="text-base font-semibold leading-4 text-white">Features</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Home</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">All Products</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Samsung</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">Redmi</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer">OnePlus</p>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-white">Contact Us</h2>
                    <span className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer flex gap-4"><MdOutlineEmail className="text-2xl"/>E-MobileShop@gmail.com</span>
                    <span className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer flex gap-4"><FaPhoneAlt className="text-2xl"/>+910000123355</span>
                    <span className="hover:text-gray-500 text-base leading-4 mt-6 text-white cursor-pointer flex gap-4"><MdLocationPin className="text-2xl"/>Address: India</span>
                    <span className=" text-base leading-4 mt-6 text-white cursor-pointer flex gap-4"><FaFacebookF className="text-2xl"/> <FaInstagram className="text-2xl"/> <FaTwitter className="text-2xl"/></span>
                </div>
                <div className="mt-10 lg:block hidden">
                    <label className="text-xl font-medium leading-5 text-white">Get updates</label>
                    <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
                        <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-black placeholder-gray-800" placeholder="Enter your email" />
                        <button className="px-3 ">Submit</button>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg:hidden">
                <label className="text-xl font-medium leading-5 text-white">Get updates</label>
                <div className="flex items-center justify-between border border-gray-800 mt-4">
                    <input type="text" className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-black placeholder-gray-800" placeholder="Enter your email" />
                    <div className="cursor-pointer mr-4  relative z-40">
                       <button className="px-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer1;
