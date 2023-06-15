import React, { useState, useContext } from 'react'
import firstImg from './../images/image-product-1.jpg'
import secondImg from './../images/image-product-2.jpg'
import thirdImg from './../images/image-product-3.jpg'
import fourthImg from './../images/image-product-4.jpg'

import firstThumbnail from './../images/image-product-1-thumbnail.jpg'
import secondThumbnail from './../images/image-product-2-thumbnail.jpg'
import thirdThumbnail from './../images/image-product-3-thumbnail.jpg'
import fourthThumbnail from './../images/image-product-4-thumbnail.jpg'

import iconNext from './../images/icon-next.svg'
import iconPrevious from './../images/icon-previous.svg'

import iconPlus from './../images/icon-plus.svg'
import iconMinus from './../images/icon-minus.svg'
import CartIcon from './../images/icon-cart.svg'

import { Context } from '../Context'


export default function Main({ toggleIsImgVisible }) {

    const [currentImg, setCurrentImg] = useState(0)
    const images = [firstImg, secondImg, thirdImg, fourthImg]
    const { cartItems, quantity, addToCart, increaseQuantity, decreaseQuantity } = useContext(Context)


    function nextImg() {
        if (currentImg < 3) setCurrentImg(oldImage => oldImage + 1)
    }

    function previousImg() {
        if (currentImg > 0) setCurrentImg(oldImage => oldImage - 1)
    }

    return (

        <div className="md:flex justify-evenly items-center lg:gap-8 md:h-custom ">
            <div className="relative md:w-5/12 lg:w-4/12">
                <img src={images[currentImg]} className="object-cover md:rounded-xl md:mb-8 sm:h-96 md:h-auto w-full cursor-pointer" onClick={toggleIsImgVisible} />
                <div className="grid-cols-4 hidden md:grid gap-6">
                    <img src={firstThumbnail} className={currentImg === 0 ? "rounded-xl border-solid border-2 border-red-500 opacity-60 cursor-pointer" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(0)} />
                    <img src={secondThumbnail} className={currentImg === 1 ? "rounded-xl border-solid border-2 border-red-500 opacity-60 cursor-pointer" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(1)} />
                    <img src={thirdThumbnail} className={currentImg === 2 ? "rounded-xl border-solid border-2 border-red-500 opacity-60 cursor-pointer" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(2)} />
                    <img src={fourthThumbnail} className={currentImg === 3 ? "rounded-xl border-solid border-2 border-red-500 opacity-60 cursor-pointer" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(3)} />
                </div>
                <button className="h-11 w-11 p-3 rounded-full bg-white right-4 top-1/2 flex justify-center items-center -translate-y-1/2 absolute md:hidden" onClick={nextImg}><img src={iconNext} className="w-3 h-4 " /></button>
                <button className="h-11 w-11 p-3 rounded-full bg-white left-4 top-1/2 flex justify-center items-center -translate-y-1/2 absolute md:hidden" onClick={previousImg}><img src={iconPrevious} className="w-3 h-4 " /></button>

            </div>

            <div className="flex flex-col gap-3 md:w-5/12 p-6 md:p-0">
                <span className="uppercase text-orange-400 tracking-wide font-bold ">Sneaker company</span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Fall Limited Edition Sneakers</h1>
                <p className="font-medium text-gray-400">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="flex justify-between text-lg font-semibold ">
                    <div className="flex gap-4 my-4">
                        <span className="text-3xl font-bold">$125.00</span>
                        <div className="bg-orange-100 text-orange-500 font-bold rounded-lg w-14 flex justify-center items-center text-lg">50%</div>
                    </div>
                    <div className="text-gray-400 line-through my-4">
                        $250.00
                    </div>


                </div>
                <div className="bg-gray-100 rounded-xl py-4 px-6 justify-between flex items-center items-center gap-4 mb-2">
                    <img src={iconMinus} onClick={decreaseQuantity} className="cursor-pointer p-2" />
                    <span>{quantity}</span>
                    <img src={iconPlus} onClick={increaseQuantity} className="cursor-pointer p-2" />
                </div>
                <button className="flex justify-center items-center gap-3 bg-orange-400 py-4 text-white font-bold rounded-lg shadow-lg shadow-orange-200" onClick={addToCart}>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero" /></svg>
                    Add to cart</button>
            </div>
        </div>

    )
}
