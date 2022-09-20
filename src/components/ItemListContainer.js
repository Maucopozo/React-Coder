import ItemCount from "./ItemCount";
import ItemList from "./ItemList";



const ItemListConstainer = ({greeting}) =>{

    const onAdd = (items) => {
        alert   ("Tu has seleccionado " + items  + " productos")
    }

return (
<>
<h3>{greeting}</h3>
<ItemCount stock={5} initial={1} onAdd={onAdd} />
<ItemList></ItemList>
</>
);

}

export default ItemListConstainer;