import { useEffect, useState } from "react";
import Item from "./Item";
import customFetch from "./CustomFetch";

const unidades = [
    {
        id:1,
        title:"Lionel Messi",
        description:"Jugador Argentina - PSG",
        price:250,
        pictureUrl:"https://i.redd.it/uqgewilktrk91.png",
        
    },
    {
        id:2,
        title:"Cristiano Penaldo",
        description:"Jugador Portugal - Man Utd",
        price:249,
        pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_819718-MLA51308567082_082022-O.webp",
    },
    {
        id:3,
        title:"Diego Maradona",
        description:"Jugador Argentina - Boca jrs",
        price:999,
        pictureUrl:"https://i.pinimg.com/originals/9f/c3/b1/9fc3b143c32ef1abecaee0c43f22a46e.jpg",
    }
            ]
  

const ItemList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        customFetch(2000, unidades)
        .then (datos => setData(unidades))
        .catch(err => console.log(err))
    },[]);

    return (
        <>
        {

           // data.lengh ?
            data.map(item => (
                <Item
                
                id={item.id}
                title={item.title}
                description={item.description}
                pictureUrl={item.pictureUrl}
                price={item.price}
                
                
                />
                ))

              //  : <p>Loading...</p>
        }


        </>

    );

            }


export default ItemList;

