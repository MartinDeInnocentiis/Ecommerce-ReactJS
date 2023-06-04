import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, categoria }) => {
    return (
        <div className='cardProducto'>
            <div className="img-card-container">
                <img className='imgProducto' src={img} alt={nombre} />
            </div>
            <div className="card-info-container">
                <h3>{nombre}</h3>
                <p>Precio: ${precio} </p>
                <Link to={`/item/${id}`} className="link"> Ver más </Link>
            </div>
        </div>
    )
}

export default Item