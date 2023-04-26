import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Hunters Shop</h1>
        <nav>
            <ul>
                <li>Guantes</li>
                <li>Kimonos</li>
                <li>Indumentaria</li>
                <li>Accesorios</li>
                <li><CartWidget /></li>
            </ul>
        </nav>
        
    </header>
  )
}

export default NavBar
