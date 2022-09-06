import NavBar from "./components/NavBar";
import ItemListConstainer from "./components/ItemListContainer";

const App = () => {
  return (
  <div>
    < NavBar />
    <ItemListConstainer greeting = "Hola soy el ItemListContainer"/>
  </div>
  );

}

export default App;