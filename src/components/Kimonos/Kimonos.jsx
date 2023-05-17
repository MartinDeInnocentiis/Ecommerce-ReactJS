import React from 'react'
import './Kimonos.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const Kimonos = () => {
    const [productosKimonos, setProductosKimonos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const productos = await getProductos();
            const productosFiltrados = productos.filter(producto => producto.categoria === 'Kimonos');
            setProductosKimonos(productosFiltrados);
        };

        fetchProductos();
    }, []);

    return (
        <div>
            <h2>KIMONOS</h2>
            {productosKimonos.map(producto => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.img} alt={producto.nombre} />
                </div>
            ))}
        </div>
    );
}

export default Kimonos
