import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import './Checkout.css'


const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
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
            setError("Por favor, complete todos los campos");
            return;
        }

        //Validamos que los campos del email coincidan entre si
        if (email !== emailConfirmacion) {
            setError("Los emails ingresados no coinciden entre sí")
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


    return (
        <div>
            <h2 className="h2Checkout">Checkout</h2>
            <form className="formManejador" onSubmit={manejadorSubmit}>
                {carrito.map(producto => (
                    <div className="divCheckout" key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>Precio: $ {producto.item.precio}</p>
                        <hr />
                    </div>
                ))}

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
                    <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfimacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="botonFinalizarCheckout" type="submit">FINALIZAR ORDEN</button>
                
                {
                    ordenId && (
                        <strong className="mensajeFinal">Gracias por tu compra! Tu numero de orden es: {ordenId} </strong>
                    )
                }
            </form>
        </div>
    )
}

export default Checkout
