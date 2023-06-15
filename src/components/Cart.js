import React, { useContext } from 'react'
import shoesIcon from './../images/image-product-1-thumbnail.jpg'
import deleteIcon from './../images/icon-delete.svg'
import { Context } from '../Context'


export default function Cart({ toggleCart, isCartVisible }) {

    const { cartQuantity, clearCart } = useContext(Context)

    function clearAndHide() {
        clearCart()
        toggleCart()
    }


    function cartEl() {
        if (cartQuantity < 1) {
            return (<div className="flex justify-center mt-14 font-semibold">Your cart is empty.</div>)
        }
        else {
            return (
                <div className="flex flex-col">
                    <div className="flex p-4 justify-evenly gap-6 items-center">
                        <img src={shoesIcon} className="w-12" />
                        <div className="flex flex-col">
                            <span>Fall Limited Edition Sneakers</span>
                            <span>$125.00 x {cartQuantity} <span className="font-bold">${(cartQuantity * 125).toFixed(2)}</span></span>
                        </div>
                        <button onClick={clearAndHide}><img src={deleteIcon} /></button>
                    </div>
                    <button className="bg-orange-500 mx-4 py-3 text-white rounded-md font-medium">Checkout</button>
                </div>
            )
        }

    }
    return (
        <div className="absolute top-24 right-1/2 translate-x-1/2 md:right-8 lg:right-0 md:translate-x-0 h-50  rounded-lg md:rounded-none w-11/12 md:w-88 bg-white shadow-lg bg-red-500">
            <div className="border-b-2 border-solid border-gray-300 p-4 font-bold text-sm">Cart</div>
            {cartEl()}
        </div>
    )
}
