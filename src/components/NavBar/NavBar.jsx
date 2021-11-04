import {Link} from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link  className="logo" to="/"> <img className="logo-img" src="../assets/logo/logo-Arca.png" alt="Arca-de-mendel" width= "160px" /></Link>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categoria/Nosotros">Nosotros</Link></li>
                <li><Link to="/categoria/Cactus">Cactus</Link></li>
                <li><Link to="/categoria/Suculentas">Suculentas</Link></li>
                <li><Link to="/categoria/Exoticas">Exoticas</Link></li>
                <li><Link to="/categoria/Contacto">Contacto</Link></li>
            </ul>
            <CartWidget className="cart"/>
        </nav>
    )
}

export default NavBar