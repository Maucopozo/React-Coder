import NavBar from "./components/NavBar";
import ItemListConstainer from "./components/ItemListContainer";
//PRUEBA 

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail";


const App = () => {
  return (
  <div>
    < NavBar />
   {/*<ItemListConstainer greeting = "Hola soy el ItemListContainer"/>*/}
   <ItemDetailContainer/>
  </div>
  );

}

export default App;