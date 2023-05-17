import React from 'react'
import './Guantes.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const Guantes = () => {
    const [productosGuantes, setProductosGuantes] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const productos = await getProductos();
            const productosFiltrados = productos.filter(producto => producto.categoria === 'Guantes');
            setProductosGuantes(productosFiltrados);
        };

        fetchProductos();
    }, []);

    return (
        <div>
            <h2>GUANTES</h2>
            {productosGuantes.map(producto => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.img} alt={producto.nombre} />
                </div>
            ))}
        </div>
    );
}

export default Guantes
