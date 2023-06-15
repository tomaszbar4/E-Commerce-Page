import React, { useState, createContext } from 'react'

const Context = createContext()

function ContextProvider({ children }) {


    const [cartQuantity, setCartQuantity] = useState(0)
    const [quantity, setQuantity] = useState(0)

    function addToCart() {
        if (quantity > 0) {
            setCartQuantity(oldQuantity => (oldQuantity + quantity))
        }
        setQuantity(0)
    }

    function clearCart() {
        setCartQuantity(0)
    }


    function increaseQuantity() {
        setQuantity(oldQuantity => oldQuantity + 1)
    }

    function decreaseQuantity() {
        if (quantity !== 0) setQuantity(oldQuantity => oldQuantity - 1)
    }

    return (
        <Context.Provider value={{ cartQuantity, quantity, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
            {children}
        </Context.Provider >
    )
}

export { ContextProvider, Context }
