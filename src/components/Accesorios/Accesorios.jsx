import React from 'react'
import './Accesorios.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import Item from '../Item/Item'

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
            <div className="accesorios">{productosAccesorios.map(prod => <Item key={prod.id}  {...prod} />)}</div>
        </div>
    );
}

export default Accesorios;