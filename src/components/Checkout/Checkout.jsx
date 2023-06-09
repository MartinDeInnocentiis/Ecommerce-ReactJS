import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'


const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfimacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")


    //Manejador del evento "sumbit" del formulario
    const manejadorSubmit = (event) => {
        event.preventDefault();
        //Validar que todos los campos estén completos
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        //Validamos que los campos del email coincidan entre si
        if (email !== emailConfirmacion) {
            setError("Los emails ingresados no coinciden entre sí.")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        //Guardo la orden en la DB
        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.log("Se produjo el siguiente error: ", error)
                setError("Error inesperado al crear la orden")
            })
    }

    if (ordenId) {
        return (
            <div className="divMsjFinal">
                <strong>
                    ¡Gracias por tu compra! Tu numero de orden es:
                    <div className="msjFinal">{ordenId}</div>
                </strong>
            </div>
        );
    }


    return (
        <div className="contenedorCheckout">
            <div className="div1">
                <h2 className="detallesOrden">Detalles de la orden</h2>
                <div className="contenedorDetalles">
                    <hr />
                    {carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>Precio: $ {producto.item.precio}</p>
                            <hr />
                        </div>
                    ))}

                    <div><h3 className="precioFinalCheckout">TOTAL: ${total}</h3></div>
                    <hr /></div>
            </div>

            <div className="div2">
                <form onSubmit={manejadorSubmit}>
                    <h2 className="h2Checkout">Checkout</h2>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">Apellido</label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">Telefono</label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">E-Mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="">Confirmar E-Mail</label>
                        <input className="ultimoInput" type="text" value={emailConfirmacion} onChange={(e) => setEmailConfimacion(e.target.value)} />
                    </div>

                    {
                        error && <p className="error" style={{ color: "red" }}> {error} </p>
                    }

                    <button className="botonFinalizarCheckout" type="submit">FINALIZAR ORDEN</button>

                    {
                        ordenId && (
                            <strong className="mensajeFinal">Gracias por tu compra! Tu numero de orden es: {ordenId} </strong>
                        )
                    }
                </form>
            </div></div>
    )
}

export default Checkout
