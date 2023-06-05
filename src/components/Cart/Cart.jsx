import { Link } from "react-router-dom"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem";
import { CarritoContext } from "../../context/CarritoContext";
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    //Calculo el total de los productos
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    //Calculo el precio total
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <>

                <h2 className="vacio">NO HAY PRODUCTOS AGREGADOS AL CARRITO</h2>
                <Link className="seguirComprando" to="/"> <button className="botonSeguir">Seguir comprando</button></Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}

            <div>
                <h3 className="cantidadTotal">CANTIDAD DE ITEMS: {totalCantidad} </h3>
                <h3 className="precioFinal">TOTAL: ${total}</h3>
            </div>

            <div className="divBotonesCart">
                <button className="vaciarCart" onclick={() => vaciarCarrito()}>Vaciar Carrito</button>
                <button className="botonFinalizar"><Link to="/checkout">FINALIZAR COMPRA</Link></button>
                <button className="botonSeguir"><Link className="seguirComprando2" to="/">Seguir comprando</Link></button>
            </div>

        </div>
    )
}

export default Cart
