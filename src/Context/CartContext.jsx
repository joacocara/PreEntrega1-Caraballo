import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    
    const agregarCarrito = (item) => {
      setCart([...cart, item])
    }

    const eliminarDelCarrito = (id) => {
      setCart( cart.filter((prod) => prod.id !== id ))
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    const totalCantidad = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {
      return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const borrarCarrito = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarCarrito,
            isInCart,
            totalCompra,
            borrarCarrito,
            eliminarDelCarrito,
            totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}