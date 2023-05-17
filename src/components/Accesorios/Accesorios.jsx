import React from 'react'
import './Accesorios.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const Accesorios = () => {
    const [productosAccesorios, setProductosAccesorios] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const productos = await getProductos();
            const productosFiltrados = productos.filter(producto => producto.categoria === 'Accesorios');
            setProductosAccesorios(productosFiltrados);
        };

        fetchProductos();
    }, []);

    return (
        <div>
            <h2>ACCESORIOS</h2>
            {productosAccesorios.map(producto => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.img} alt={producto.nombre} />
                </div>
            ))}
        </div>
    );
}

export default Accesorios;