import React, { useState } from 'react'
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

import closeIcon from './../images/icon-close.svg'


export default function MaximizedImg({ toggleIsImgVisible }) {

    const [currentImg, setCurrentImg] = useState(0)
    const images = [firstImg, secondImg, thirdImg, fourthImg]


    function nextImg() {
        if (currentImg < 3) setCurrentImg(oldImage => oldImage + 1)
    }

    function previousImg() {
        if (currentImg > 0) setCurrentImg(oldImage => oldImage - 1)
    }



    return (
        <div className="fixed top-0 left-0 w-full h-full flex-col justify-center items-center bg-black/75 hidden md:flex" >
            <div className="relative w-full">
                <button className="absolute -top-12 md:right-1/4 lg:right-1/3" onClick={toggleIsImgVisible}><img src={closeIcon} className="scale-150" /></button>
            </div>
            <img src={images[currentImg]} className="rounded-xl w-10/12 md:w-1/2 lg:w-1/3 mb-8" onClick={toggleIsImgVisible} />
            <div className="flex w-10/12 md:w-1/2 lg:w-1/3 justify-evenly ">
                <div className="w-1/6 ">
                    <img src={firstThumbnail} className={currentImg === 0 ? "rounded-xl cursor-pointer border-solid border-2 opacity-50 border-red-500" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(0)} /></div>
                <div className="w-1/6 ">
                    <img src={secondThumbnail} className={currentImg === 1 ? "rounded-xl cursor-pointer border-solid border-2 opacity-50 border-red-500" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(1)} /></div>
                <div className="w-1/6 ">
                    <img src={thirdThumbnail} className={currentImg === 2 ? "rounded-xl cursor-pointer border-solid border-2 opacity-50 border-red-500" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(2)} /></div>
                <div className="w-1/6 ">
                    <img src={fourthThumbnail} className={currentImg === 3 ? "rounded-xl cursor-pointer border-solid border-2 opacity-50 border-red-500" : "rounded-xl cursor-pointer"} onClick={() => setCurrentImg(3)} /></div>
            </div>


            <div className="rounded-xl w-10/12 md:w-1/2 lg:w-1/3 absolute flex justify-center items-center ">
                <button className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -left-5 -top-16 lg:-top-20" onClick={previousImg}><img src={iconPrevious} /></button>
                <button className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -right-5 -top-16 lg:-top-20" onClick={nextImg}><img src={iconNext} /></button>
            </div>
        </div >
    )
}
