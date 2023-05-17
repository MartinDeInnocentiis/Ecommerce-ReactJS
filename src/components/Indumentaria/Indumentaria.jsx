import React from 'react'
import './Indumentaria.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const Indumentaria = () => {
    const [productosIndumentaria, setProductosIndumentaria] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const productos = await getProductos();
            const productosFiltrados = productos.filter(producto => producto.categoria === 'Indumentaria');
            setProductosIndumentaria(productosFiltrados);
        };

        fetchProductos();
    }, []);

    return (
        <div>
            <h2>INDUMENTARIA</h2>
            {productosIndumentaria.map(producto => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.img} alt={producto.nombre} />
                </div>
            ))}
        </div>
    );
}

export default Indumentaria
