import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [ item, setItem ] = useState ([null])
    const [ loading, setLoading] = useState (true)
    console.log(item)
    const {itemId} = useParams()

    useEffect (() => {
        setLoading(true)

       
               
            
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [itemId])


    return(
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} /> 
            }
         
        </div>
    )
}

export default ItemDetailContainer