//BORRAR DESPUES ESTO

import { Article } from "@mui/icons-material";
import { Link } from "react-router-dom";

//HASTA ACA


const Item = ({id, title, description, price, pictureUrl}) => {
return (
    <>
    <div className="carta">
        <h2>{title}</h2>
        <img className="ImagenProducto" src={pictureUrl} alt="Imagen Figurita"/> 
        <h2>{description}</h2>
        <h3>{price}</h3>
        <Link to={`/item/${id}`} className="aLink"><Article></Article>Ver más</Link>
    </div>

    </>

)
}

export default Item;