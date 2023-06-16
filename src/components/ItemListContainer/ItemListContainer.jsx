import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../itemList/itemList'



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => () => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    

    return(
        <div className="container my-5">
         <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer