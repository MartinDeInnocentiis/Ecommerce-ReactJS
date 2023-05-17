import React from 'react'
import './Guantes.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import Item from '../Item/Item'

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
            <div className="guantes">{productosGuantes.map(prod => <Item key={prod.id}  {...prod} />)}</div>
        </div>
    );
}

export default Guantes
