import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({items}) => {
    return (
        <div>
            <h2>Procesadores</h2>
            <hr />

            <div className='row'>
                { // 1 FORMA DE HACER EL MAP
                   // items.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                    // 2da forma
                    //items.map((prod) => <ItemCard key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio}/>)
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)

                }
            </div>
        </div>
    )
}

export default ItemList