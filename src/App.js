import NavBar from "./components/NavBar";
import ItemListConstainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
//PRUEBA 

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Err_404 from "./components/Err_404";
import CartContextProvider from "./components/CartContext";


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConstainer/>} />
          <Route path="/category/:idCategory" element={<ItemListConstainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Err_404/>} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>

   
   //{/*<ItemListConstainer greeting = "Hola soy el ItemListContainer"/>*/}
   //{/*<ItemDetailContainer/>*/}

  );

}

export default App; 