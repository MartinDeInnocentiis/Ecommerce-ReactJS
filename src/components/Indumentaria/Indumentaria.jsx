import React from 'react'
import './Indumentaria.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import Item from '../Item/Item'

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
            <div className="indumentaria">{productosIndumentaria.map(prod => <Item key={prod.id}  {...prod} />)}</div>
        </div>
    );
}

export default Indumentaria
