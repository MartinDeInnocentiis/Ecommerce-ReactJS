import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div className="contadorItems">
                <button className="botonesItemCount" onClick={decrementar}> - </button>
                <p className="contador">{contador}</p>
                <button className="botonesItemCount" onClick={incrementar}> + </button>
                <button className="botonAgregar" onClick={() => funcionAgregar(contador)}>AGREGAR AL CARRITO</button>
            </div>
        </>
    )
}
export default ItemCount
