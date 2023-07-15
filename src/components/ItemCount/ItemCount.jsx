
const ItemCount = ({ max, cantidad, setCantidad, handleAgregar  }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

   
   
    return (
        <div>  
            <button 
                onClick={handleRestar} 
                className={cantidad === 1 ? "btn btn-outline-danger" :  "btn btn-outline-primary"}
                disabled={cantidad === 1}
                >
            -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === max}
            >
                +
            </button>
            <br />
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}
export default ItemCount