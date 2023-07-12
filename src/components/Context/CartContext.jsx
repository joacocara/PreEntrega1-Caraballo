import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const agregarCarrito = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarCarrito,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}