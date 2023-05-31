import { Link } from "react-router-dom"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem";
import { CarritoContext } from "../../context/CarritoContext";


const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    //Calculo el total de los productos
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    //Calculo el precio total
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if (totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Seguir comprando</Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Cantidad Total: {totalCantidad} </h3>
            <h3>Total: ${total}</h3>
            <button onclick={() => vaciarCarrito()}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}

export default Cart
