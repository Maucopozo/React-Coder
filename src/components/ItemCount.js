import { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";


const ItemCount = ({stock , initial , onAdd}) => {

const [cantidad, setCantidad] = useState(0);
   
useEffect(() => {
    setCantidad(initial);
},[]);

const sumar = () => {
    if (cantidad < stock){
        setCantidad (cantidad + 1) 
    }
}

const restar = () => {
    if (cantidad > initial) {
        setCantidad (cantidad - 1);
    }
}   
    return(        
<div>   
<button onClick={sumar}><Add/></button>
<>{cantidad}</>
<button onClick={restar}><Remove/></button>

{
    stock
    ? <button onClick={() => onAdd (cantidad) }>Agregar al Chango</button>
    : <button disabled>Agregar al chango</button>
}
</div>

    );
    }

export default ItemCount;