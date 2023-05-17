import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="Home">Hunters Shop</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to={"/kimonos"}>Kimonos</NavLink>
          </li>
          <li>
            <NavLink to={"/guantes"}>Guantes</NavLink>
          </li>
          <li>
            <NavLink to={"/indumentaria"}>Indumentaria</NavLink>
          </li>
          <li>
            <NavLink to={"/accesorios"}>Accesorios</NavLink>
          </li>
          <li><CartWidget /></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar