import React from 'react'
import './Kimonos.css'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncmock'
import Item from '../Item/Item'

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
            <div className="kimonos">{productosKimonos.map(prod => <Item key={prod.id}  {...prod} />)}</div>
        </div>
    );
}

export default Kimonos
