import { useState } from "react";
const ItemCount = () => {

const [cantidad, setCantidad] = useState(1);

    const handleClick = () =>{
       setCantidad(cantidad+1);
    }

    return(
<div>
<button onClick={handleClick}>➕</button> {cantidad}
<button onClick>➖</button>
<hr></hr>
<button onClick>Agregar al Carrito</button>
</div>

    );
}

export default ItemCount;