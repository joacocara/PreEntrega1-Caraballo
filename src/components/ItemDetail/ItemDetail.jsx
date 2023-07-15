import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"




const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {  

    const { agregarCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad
        }
        
       agregarCarrito(item)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return(
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />
            <small>categoria: {category}</small>


            {
                isInCart(id)
                    ?   <Link className="btn btn-success" to="/Cart">Terminar mi compra</Link>
                    :   <ItemCount 
                            max={stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                />
            }
            <hr />
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail