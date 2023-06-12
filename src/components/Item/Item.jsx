import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto'>
            <div className="img-card-container">
            <Link to={`/item/${id}`}> <img className='imgProducto' src={img} alt={nombre} /></Link>
            </div>
            <div className="card-info-container">
                <h3 className='nombreProd'>{nombre}</h3>
                <p>Precio: ${precio} </p>
                <Link to={`/item/${id}`} className="verMas"> Ver más </Link>
            </div>
        </div>
    )
}

export default Item