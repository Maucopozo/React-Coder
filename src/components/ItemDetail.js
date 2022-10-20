import { ShoppingCartCheckout } from "@mui/icons-material";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
    const {addItem } = useContext(CartContext)

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " productos");
        addItem(item);
    }


    return (

        <>
        {
        item
        ?
         
        <div className="itemDetail">
            <img src={item.pictureUrl} alt="Imagen-Figurita"/>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <h2>${item.price}</h2>
            <h2>{item.stock} en Stock</h2>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
            <Link to="/cart" className="aLink"><ShoppingCartCheckout></ShoppingCartCheckout>CheckOut</Link>
        
        </div>
       : <p>Loading...</p>
        }
        </>

    );
}


export default ItemDetail;