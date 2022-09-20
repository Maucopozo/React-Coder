import NavBar from "./components/NavBar";
import ItemListConstainer from "./components/ItemListContainer";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";


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