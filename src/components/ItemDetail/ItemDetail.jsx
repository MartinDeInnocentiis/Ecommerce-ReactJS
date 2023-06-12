import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({ id, nombre, precio, stock, img }) => {
  //Creo un estado con la cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  //Creo una funcion que maneje la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }


  return (
    <div className='contenedorItem'>
      <div className="divDetails">
          <img src={img} alt={nombre} className='imgprod' />
      <div className="divInfo">
        <hr />
          <h2 className='detailNombre'>{nombre} </h2>
          <h3 className="detailPrecio">PRECIO: ${precio} </h3>
          <hr />
          <p className="description">
            Todos nuestros productos son de la más alta calidad, lo que nos convierte en la marca N°1 en el mundo de las MMA, Boxeo, JiuJitsu y otros deportes de combate.
            Elaborados con materiales de primer nivel, nuestros productos alcanzan un standar inmejorable de calidad. Sponsor oficial de la UFC.
            Descubre la excelencia en cada movimiento con VENUM.
            Únete al Team Venum y alcanza tu máximo potencial.
          </p>
      
      <div className="botonesDetails">
        {
          //Logica de montaje y desmontaje de componentes:
          agregarCantidad > 0 ? (
            <>
              <div className="finalizarCompra">
                <Link to="/cart">
                  <button className="botonFinalizar">
                    IR AL CARRITO
                  </button>
                </Link>
              </div>

              <div className="seguirCompra">
                <Link className="seguirComprando" to="/"> <button className='botonSeg'>SEGUIR COMPRANDO</button></Link>
              </div>
            </>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )}
      </div>
      </div>
      </div>
    </div>

  )
}

export default ItemDetail
