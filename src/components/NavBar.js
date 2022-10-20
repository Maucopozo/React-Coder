import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
<header>
    <div className="logoIni">
    <Link to="/"><h1>JOGA-BONITO</h1></Link>
    </div>
    <div>
      <ul>
        <li><Link to="/category/1">ARGENTINA</Link></li>
        <li><Link to="/category/2">CLUBES</Link></li>
        <li><Link to="/category/3">INTERNACIONAL</Link></li>
      </ul>
    </div>
    <CartWidget/>
</header>

  );

}

export default NavBar;