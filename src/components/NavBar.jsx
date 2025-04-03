import {Link} from "react-router-dom";
import "./NavBar.css"


function NavBar(){

    return (
        <nav className="navbar">
            <Link to='/'>
                GemeenteApp
            </Link>
            <ul className="navbar-list">
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Registreren</Link></li>
                <li><Link to='/profile'>Profiel</Link></li>
                <li><Link to='/proposal'>Verzoek</Link></li>
                <li><Link to='/proposals'>Verzoekoverzicht</Link></li>
            </ul>
        </nav>


    )
}

export default NavBar;