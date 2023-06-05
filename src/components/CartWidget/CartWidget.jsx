import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);


  return (
    <Link className="cartLink" to={"/cart"}>
      <div className="contenedorCart">
      <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
      {
        totalCantidad > 0 && <span className="cartNumber">{totalCantidad}</span>
      }
      </div>
    </Link>
  )
}

export default CartWidget
