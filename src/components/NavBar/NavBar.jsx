import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to={"/"} className="nav-link">
        <h1 className="Home">Hunters Shop</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to={"/kimonos"} className="nav-link">Kimonos</NavLink>
          </li>
          <li>
            <NavLink to={"/guantes"} className="nav-link">Guantes</NavLink>
          </li>
          <li>
            <NavLink to={"/indumentaria"} className="nav-link">Indumentaria</NavLink>
          </li>
          <li>
            <NavLink to={"/accesorios"} className="nav-link">Accesorios</NavLink>
          </li>
          <li><CartWidget /></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar