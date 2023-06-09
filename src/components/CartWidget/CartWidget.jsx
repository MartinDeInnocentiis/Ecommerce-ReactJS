import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";


  return (
    <div className="contenedorCart">
      <Link className="cartLink" to={"/cart"}>
        <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
        {
          cantidadTotal > 0 && <span className="cartNumber">{cantidadTotal}</span>
        }
      </Link>
    </div>
  )
}

export default CartWidget
