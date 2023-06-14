import './ItemListContainer.scss'

const MOCK_DATA = [
    {
        id: 1,
        nombre: "Ryzen 5 3600",
        descripcion: "Procesador de 3.6 GHZ",
        precio: 47000,
        img: ""
    }
]

const ItemListContainer = ({mensaje}) => {
    return(
        <div className="tituloprocesadores">
            <h2>Procesadores</h2>
            <p className="mensajeProcesador">{mensaje}</p>
        </div>
    )
}

export default ItemListContainer