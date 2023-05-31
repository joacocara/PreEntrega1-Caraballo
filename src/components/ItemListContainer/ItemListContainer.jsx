import './ItemListContainer.scss'

const ItemListContainer = ({mensaje}) => {
    return(
        <div className="tituloprocesadores">
            <h2>Procesadores</h2>
            <p className="mensajeProcesador">{mensaje}</p>
        </div>
    )
}

export default ItemListContainer