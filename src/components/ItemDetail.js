import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + "productos");
    }

    return (
        <>
        {
     //   item.image
     //   ?
        <div className="itemDetail">
            {item.image[0]}
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h1>{item.cost}</h1>
            <h3>{item.stock}Unidades en stock</h3>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>

        
        </div>
       // : <p>Loading...</p>
        }
        </>
    );
}


export default ItemDetail;