import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
        if (!yaEstaEnCarrito(item.id)) {
            setCarrito(prev => [...prev, { item, cantidad }]);
        } else {
            console.log("Producto ya agregado");
        }

        /*const productoExistente = carrito.find(prod => prod.item.id)

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }])
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado); 
        }*/
    }

    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.item.id === id);
    }


    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }


    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, yaEstaEnCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}
