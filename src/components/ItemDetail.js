import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " productos");
    }

    const products = [
        {
            id:1,
            title:"Lionel Messi",
            stock: 10,
            price:250,
            description:"Jugador Argentina - PSG",
            pictureUrl:["https://i.redd.it/uqgewilktrk91.png"],
            
        },
        {
            id:2,
            title:"Cristiano Penaldo",
            stock: 15,
            price:249,
            description:"Jugador Portugal - Man Utd",
            pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_819718-MLA51308567082_082022-O.webp",
        },
        {
            id:3,
            title:"Diego Maradona",
            stock: 1,
            price:999,
            description:"Jugador Argentina - Boca jrs",
            pictureUrl:["https://i.pinimg.com/originals/9f/c3/b1/9fc3b143c32ef1abecaee0c43f22a46e.jpg"],
        }
                ]

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
        
        </div>
       : <p>Loading...</p>
        }
        </>

    );
}


export default ItemDetail;