import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

const ctx = useContext(CartContext)
    return (
    <>
        <h1>Carrito de Compras</h1>
        <ul>
        {
            ctx.cartList.map(item =><hi>{item.title}</hi>)
        }
        </ul>
    </>

    );
}

export default Cart; 