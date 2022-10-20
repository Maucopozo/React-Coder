import { Link } from "react-router-dom";

const Err_404 = () => {
    return(
        <div className="error404P"> 
            <h1>PÁGINA INEXISTENTE</h1>
            <img src="https://uploads.tapatalk-cdn.com/20190715/ddbb72ed657222255824b9da94c5bf71.gif"></img>
            <Link to ="/" className="aLink"><h3>VOLVER</h3></Link>
        </div>
    );
}

export default Err_404;