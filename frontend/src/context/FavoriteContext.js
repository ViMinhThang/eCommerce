import { createContext, useContext, useEffect, useState } from "react";



const FavContext = createContext()



export const FavoriteProvider = ({ children }) => {
    const [favItems, setFavItems] = useState(() => {
        const storedFav = localStorage.getItem("favorite")
        return storedFav ? JSON.parse(storedFav) : []
    })
    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favItems))
    }, [favItems])


    const addToFav = (product) => {
        console.log(product)
        if (checkAddedFav(product._id)) {
            console.log("item has been added")
        } else {
            setFavItems((prevItems) => {
                return [...prevItems, product]
            })
        }
    }
    const removeFromFav = (productId) => {
        setFavItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    }
    const checkAddedFav = (productId) => {
        const existingItem = favItems.find((item) => item._id === productId)
        console.log(existingItem)
        return existingItem ? true : false
    }
    return (
        <FavContext.Provider value={{ favItems, addToFav, removeFromFav, checkAddedFav }}>
            {children}
        </FavContext.Provider>
    )
}
export const useFavorite = () => {
    return useContext(FavContext)
}