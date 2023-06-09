import { Link } from "react-router-dom"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem";
import { CarritoContext } from "../../context/CarritoContext";
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="divVacio">
                <h2 className="vacio">NO HAY PRODUCTOS AGREGADOS AL CARRITO</h2>
                <Link className="seguirComprando" to="/"> <button className="botonSeguir">Seguir comprando</button></Link>
            </div>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="detallesCart">
                <h3 className="cantidadTotal">CANTIDAD DE ITEMS: {cantidadTotal} </h3>
                <h3 className="precioFinal">TOTAL: ${total}</h3>
            </div>

            <div className="divBotonesCart">
                <button className="vaciarCart" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <Link to="/checkout"><button className="botonFin">FINALIZAR COMPRA</button></Link>
                <button className="botonSeguir"><Link className="seguirComprando2" to="/">Seguir comprando</Link></button>
            </div>
        </div>
    )
}

export default Cart
