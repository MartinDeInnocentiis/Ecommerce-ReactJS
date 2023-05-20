import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>${precio} </h3>
      <p className="description">
        Todos nuestros productos son de la más alta calidad, lo que nos convierte en la marca N°1 en el mundo de las MMA, Boxeo, JiuJitsu y otros deportes de combate. 
        Elaborados con materiales de primer nivel, nuestros productos alcanzan un standar inmejorable de calidad. Sponsor oficial de la UFC. 
        Descubre la excelencia en cada movimiento con VENUM. 
        Únete al Team Venum y alcanza tu máximo potencial.
      </p>
      <img src={img} alt={nombre} className='imgprod'/>
    </div>
  )
}

export default ItemDetail