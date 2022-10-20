import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "./CustomFetch";
import ItemDetail from "./ItemDetail";

//const {products} = require ("./products");

const products = [
        {
            id:1,
            title:"Camiseta Alemania Titular",
            description:"Descubre la magia de la casaca de la selección Germana, Camiseta de Alemania Titular Original.",
            stock: 5,
            price:15000,
            pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e86b99181d5c4bb89d53ae96009ae5a1_9366/Camisa_1_Alemanha_22_Branco_HF1467_01_laydown.jpg",
            categoryId:3,
            category: {
                name: "Internacional",
                id: 3,
            }, 
        },
        {
            id:2,
            title:"Camiseta España Titular",
            description:"Descubre la magia de la casaca de la selección Española, Camiseta de España Titular Original.",
            stock: 5,
            price:15000,
            pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d75f8ea0f0ff4a0e8830ae880131076c_9366/Camiseta_primera_equipacion_Espana_22_Rojo_HF1408_01_laydown.jpg",
            categoryId:3,
            category: {
                name: "Internacional",
                id: 3,
            },
        },
        {
            id:3,
            title:"Camiseta Belgica Titular",
            description:"Descubre la magia de la casaca de la selección Belga, Camiseta de Belgica Titular Original.",
            stock: 5,
            price:15000,
            pictureUrl:"https://res.cloudinary.com/assetmanagerpim/images/co_rgb:ffd700,fl_text_no_trim.relative,g_center,l_text:ji1b7v4ivvtk0vakdzs7.otf_400_center:10/a_0,fl_layer_apply,x_-6,y_-207/c_scale,h_1000,w_1000/q_98/87dee0babbf840ba8de2ae99012e29e7_9366/HD9412.jpg",
            categoryId:3,
            category: {
                name: "Internacional",
                id: 3,
            },
        },
            {
                id:4,
                title:"Camiseta Flamengo Titular",
                description:"Como no llevar la elegante camiseta del ultimo campeon del ultimo campeon de america?. Camiseta Original Titular Flamengo",
                stock: 10,
                price:10000,
                pictureUrl:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/81fd23f224f746c483aaae770013a861_9366/Camisa_1_CR_Flamengo_22-23_Vermelho_H18340_01_laydown.jpg",
                categoryId:2,
                category: {
                    name: "Clubes",
                    id: 2,
                },
            },
            {
                id:5,
                title:"Camiseta Real Madrid Titular",
                description:"Vistete con la casaca del último campeon de la Champions League",
                stock: 10,
                price:10000,
                pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7284a4ce3ae46899ae0ae96009c09a4_9366/Camisa_3_Real_Madrid_22-23_Preto_HI1649_01_laydown.jpg",
                categoryId:2,
                category: {
                    name: "Clubes",
                    id: 2,
                },
            },
            {
                id:5,
                title:"Camiseta Manchester United Titular",
                description:"Esta elegante camiseta es utilizada actualmente por los mejores jugadores de futbol del mundo, entre ellos un tal CR7",
                stock: 10,
                price:10000,
                pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edc50f58129041be80b2ae29011a3119_9366/Camisa_1_Manchester_United_22-23_Vermelho_H64049_01_laydown.jpg",
                categoryId:2,
                category: {
                    name: "Clubes",
                    id: 2,
                },
            },
            {
                id:6,
                title:"Camiseta Boca Juniors Titular",
                description:"Simplemente Boca Juniors, club más grande del mundo",
                stock: 3,
                price:100000,
                pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fcfb797d457430eaccaaec200dafeb7_9366/Camiseta_Titular_Boca_Juniors_22-23_Azul_HE6323_01_laydown.jpg",
                categoryId:2,
                category: {
                    name: "Clubes",
                    id: 2,
                },
            },
            {
                id:7,
                title:"Camiseta Boca Juniors Suplente",
                description:"Simplemente Boca Juniors, club más grande del mundo. Camiseta Suplente 2022",
                stock: 3,
                price:50000,
                pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/edc50f58129041be80b2ae29011a3119_9366/Camisa_1_Manchester_United_22-23_Vermelho_H64049_01_laydown.jpg",
                categoryId:2,
                category: {
                    name: "Clubes",
                    id: 2,
                },
            },
            {
                id:8,
                title:"Camiseta Argentina Titular",
                description:"Camiseta titular de la Scaloneta, simplemente épico.",
                stock: 30,
                price:20000,
                pictureUrl:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
                categoryId:3,
                category: {
                    name: "Argentina",
                    id: 3,
                },
            },
            {
                id:9,
                title:"Camiseta Argentina Suplente",
                description:"Camiseta anti-mufa Selección Argentina Qatar 2022, no azul, no negro, solamente violeta. Nada de viejos recuerdos, vamos!",
                stock: 30,
                price:20000,
                pictureUrl:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a37248da803e40d08f48af04010aae24_9366/Camiseta_Suplente_Seleccion_Argentina_Messi_1_Azul_IQ5463_01_laydown.jpg",
                categoryId:3,
                category: {
                    name: "Argentina",
                    id: 3,
                },
            },
                ]


const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    const {id} = useParams();
    
    useEffect(() => {
        customFetch(2000, products.find(item => item.id == id))
        .then(result => setDato(result))
        .catch(err => console.log (err))
    }, [id]);

    return (
        <ItemDetail item= {dato} />
    );


}

export default ItemDetailContainer;