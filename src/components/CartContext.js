import {createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartlist] = useState([]); 

    const additem = (product) => {
        setCartlist([
            ...cartList,
            product
        ])
    }

    const removeItem = (id) => {

    }

    const clear = () => {
        
    }


    return(

        <CartContext.Provider value={{cartList, additem, removeItem, clear}}>


            {children}
             
        </CartContext.Provider>
            
    );
}

export default CartContextProvider;