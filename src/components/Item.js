//BORRAR DESPUES ESTO

//HASTA ACA


const Item = ({id, title, description, price, pictureUrl}) => {
return (
    <>
    <div className="carta">
        <h2>{title}</h2>
        <img className="ImagenProducto" src={pictureUrl} alt="Imagen Figurita"/> 
        <h2>{description}</h2>
        <h3>{price}</h3>
        </div>

    </>

)
}

export default Item;