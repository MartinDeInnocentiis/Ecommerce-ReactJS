import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Hunters Shop</h1>
        <nav>
            <ul>
                <li>GUANTES</li>
                <li>KIMONOS</li>
                <li>INDUMENTARIA</li>
                <li>ACCESORIOS</li>
                <li><CartWidget /></li>
            </ul>
        </nav>
        
    </header>
  )
}

export default NavBar
