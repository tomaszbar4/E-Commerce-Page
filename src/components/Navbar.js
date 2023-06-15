import React, { useContext, useState } from 'react'
import logo from './../images/logo.svg'
import cartIcon from './../images/icon-cart.svg'
import avatar from './../images/image-avatar.png'
import hamburger from './../images/icon-menu.svg'

import { Context } from '../Context'

export default function Navbar({ toggleCart }) {

    const [menuShow, setMenuShow] = useState(false)

    const { cartQuantity } = useContext(Context)

    return (
        <nav className="flex items-center justify-between p-6 lg:px-0 border-solid border-gray-100 md:border-b-2">
            <div className="flex items-center gap-4">
                <button className="p-0.5" onClick={() => setMenuShow(true)}><img src={hamburger} className="w-5 h-5 cursor-pointer lg:hidden transition-all duration-200" /></button>
                <img src={logo} className="md:mr-8" />
                {menuShow && <div className="bg-black/70 transition-all duration-200 absolute left-0 top-0 w-screen h-screen lg:hidden z-10"></div>}
                <div className={menuShow ? "translate-x-0 flex flex-col lg:flex-row gap-4 md:gap-8 p-8 ml-4 h-full w-full bg-white z-10 lg:z-0 w-2/3 lg:w-auto lg:h-auto lg:static lg:p-0 -left-4 top-0 absolute text-lg lg:text-medium transition-all duration-200" : "flex flex-col lg:visible -translate-x-full lg:translate-x-0 lg:flex-row gap-4 md:gap-8 p-8 ml-4 h-full w-full bg-white lg:z-0 z-20 w-2/3 lg:w-auto lg:h-auto lg:static lg:p-0 -left-4 top-0 absolute text-lg lg:text-medium transition-all duration-200"}>
                    <button className="mb-8 lg:hidden" onClick={() => setMenuShow(false)}><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="black" fill-rule="evenodd" /></svg></button>
                    <span className="cursor-pointer relative font-bold text-black lg:text-gray-500 lg:font-normal after:content-[''] after:h-1.5 after:bg-orange-500 after:top-14 after:hidden after:w-0 after:hover:w-full after:hover:visible lg:after:block after:absolute after:transition-all after:duration-200">Collections</span>
                    <span className="cursor-pointer relative font-bold text-black lg:text-gray-500 lg:font-normal after:content-[''] after:h-1.5 after:bg-orange-500 after:top-14 after:hidden after:w-0 after:hover:w-full after:hover:visible lg:after:block after:absolute after:transition-all after:duration-200">Men</span>
                    <span className="cursor-pointer relative font-bold text-black lg:text-gray-500 lg:font-normal after:content-[''] after:h-1.5 after:bg-orange-500 after:top-14 after:hidden after:w-0 after:hover:w-full after:hover:visible lg:after:block after:absolute after:transition-all after:duration-200">Women</span>
                    <span className="cursor-pointer relative font-bold text-black lg:text-gray-500 lg:font-normal after:content-[''] after:h-1.5 after:bg-orange-500 after:top-14 after:hidden after:w-0 after:hover:w-full after:hover:visible lg:after:block after:absolute after:transition-all after:duration-200">About</span>
                    <span className="cursor-pointer relative font-bold text-black lg:text-gray-500 lg:font-normal after:content-[''] after:h-1.5 after:bg-orange-500 after:top-14 after:hidden after:w-0 after:hover:w-full after:hover:visible lg:after:block after:absolute after:transition-all after:duration-200">Contact</span>
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8 relative">
                <img src={cartIcon} className="w-6 cursor-pointer mt-1" onClick={toggleCart} />
                {cartQuantity !== 0 && <div className="absolute bg-orange-400 px-2 md:px-3 text-white font-bold rounded-xl text-xs top-0 md:top-2 left-2">{cartQuantity > 0 && cartQuantity}</div>}
                <img src={avatar} className="w-8 md:w-12 cursor-pointer" />
            </div>
        </nav >
    )
}
