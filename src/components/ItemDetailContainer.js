import { useEffect, useState } from "react";
import customFetch from "./CustomFetch";
import ItemDetail from "./ItemDetail";

//const {products} = require ("./products");

const products = [
    {
        id:1,
        title:"Lionel Messi",
        stock: 10,
        price:250,
        description:"Jugador Argentina - PSG",
        pictureUrl:"https://i.redd.it/uqgewilktrk91.png",
        
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
        pictureUrl:"https://i.pinimg.com/originals/9f/c3/b1/9fc3b143c32ef1abecaee0c43f22a46e.jpg",
    }
            ]


const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    
    useEffect(() => {
        customFetch(2000, products[2])
        .then(result => setDato(result))
        .catch(err => console.log (err))
    }, []);

    return (
        <ItemDetail item= {dato} />
    );


}

export default ItemDetailContainer;