import ItemCount from "./ItemCount";



const ItemListConstainer = ({greeting}) =>{

    const onAdd = (items) => {
        alert   ("Tu has seleccionado " + items  + " productos")
    }

return (<>
<h3>{greeting}</h3>
<ItemCount stock={5} initial={1} onAdd={onAdd} />
</>
);

}

export default ItemListConstainer;