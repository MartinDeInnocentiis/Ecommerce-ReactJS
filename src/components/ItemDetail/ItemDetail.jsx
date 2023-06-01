import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ id, nombre, precio, stock, img }) => {
  //Creo un estado con la cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  //Creo una funcion que maneje la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados" + cantidad);

  }


  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>PRECIO: ${precio} </h3>
      <p className="description">
        Todos nuestros productos son de la más alta calidad, lo que nos convierte en la marca N°1 en el mundo de las MMA, Boxeo, JiuJitsu y otros deportes de combate.
        Elaborados con materiales de primer nivel, nuestros productos alcanzan un standar inmejorable de calidad. Sponsor oficial de la UFC.
        Descubre la excelencia en cada movimiento con VENUM.
        Únete al Team Venum y alcanza tu máximo potencial.
      </p>
      <img src={img} alt={nombre} className='imgprod' />

      {
        //Logica de montaje y desmontaje de componentes:
        agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail