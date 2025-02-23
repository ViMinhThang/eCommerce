import { createContext, useContext, useEffect, useState } from "react";

// create Context
const CartContext = createContext();

//2 create Provider
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])
    //add To Cart
    const addToCart = (product, quantity = 1) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item._id === product._id)
            if (existingItem) {
                console.log(1)
                return prevItems.map((item) => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)
            } else {
                return [...prevItems, { ...product, quantity }]
            }
        })
    }
    //delete from Cart
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item._id !== productId))
    }

    //update Qquantity
    const updateQuantity = (productId, quantity) => {
        setCartItems(
            cartItems.map((item) => item._id === productId ? { ...item, quantity } : item)
        )
    }
    // delete entire Cart
    const clearCart = () => {
        setCartItems([])
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}</CartContext.Provider>
    )
}


export const useCart = () => {
    return useContext(CartContext)
}