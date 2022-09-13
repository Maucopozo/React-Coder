import NavBar from "./components/NavBar";
import ItemListConstainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.css";
import ItemCount from "./components/ItemCount";
import "./App.css";

const App = () => {
  return (
  <div>
    < NavBar />
    <ItemListConstainer greeting = "Hola soy el ItemListContainer"/>
  </div>
  );

}

export default App;