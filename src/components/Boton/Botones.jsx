const Compra = () => {
    const [cantidad, setCantidad] = useState(0)
  
    const sumar = () => {
      setCantidad(cantidad + 1)
    }
  
    const restar = () => {
      setCantidad(cantidad - 1)
    }
  
    const reiniciar = () => {
      setCantidad(0)
    }
  
    return (
      <div className='botones'>
        <h2>Cantidad: {cantidad}</h2>   
        <button onClick={sumar}>Agregar al carrito</button>
        <button onClick={restar}>Quitar del carrito</button>
        <button onClick={reiniciar}>Reiniciar carrito</button>
      </div>
    )
  }
  
  export default Compra