import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to={"/"} className="nav-link">
        {
          <img src="../img/logo.png" alt="StoreLogo" className="logo"/>
          //<h1 className="Home">Hunters Shop</h1>
        }
      </Link>
      <nav>
        <ul className="navbarList">
          <li className="objectList">
            <NavLink to={"/categoria/1"} className="nav-link">Kimonos</NavLink>
          </li>
          <li className="objectList">
            <NavLink to={"/categoria/2"} className="nav-link">Guantes</NavLink>
          </li>
          <li className="objectList">
            <NavLink to={"/categoria/3"} className="nav-link">Indumentaria</NavLink>
          </li>
          <li className="objectList">
            <NavLink to={"/categoria/4"} className="nav-link">Accesorios</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar