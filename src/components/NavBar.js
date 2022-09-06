import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
<header>
    <div>
      <h1>MUNDIALITO</h1>
      <CartWidget/>
    </div>
    <div>
      <ul>
        <li> <a href="index.html">TODO</a></li>
        <li> <a href="index.html">PAISES</a></li>
        <li> <a href="index.html">JUGADORES</a></li>
        <li> <a href="index.html">ESTADIOS</a></li>
      </ul>
    </div>
</header>

  );

}

export default NavBar;