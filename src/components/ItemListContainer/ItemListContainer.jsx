import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams, useLocation } from 'react-router-dom'
import { db } from '../../services/config'
import { collection,getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  const location = useLocation();
  const pathName = location.pathname

  //FUNCION PARA CONSEGUIR EL NOMBRE DE LA CATEGORÍA EN BASE A SU NUMERO, PARA PODER RENDERIZARLO LUEGO TRAS REALIZAR EL FILTRADO
  const getPathName = (idCat) => {
    switch (idCat) {
      case "/categoria/1":
        return "KIMONOS"
        break
      case "/categoria/2":
        return "GUANTES"
        break
      case "/categoria/3": 
        return "INDUMENTARIA"
        break
      case "/categoria/4":
        return "ACCESORIOS"
        break

      default:
        return "PRODUCTOS"
    }
  }

  const pageTitle = getPathName(pathName)

  useEffect (()=>{
    //CONEXION A LA DB. SI HAY CATEGORIA FILTRO POR CATEGORIA. SINO, TRAIGO TODA LA COLECCION
    const misProductos =idCategoria ? query (collection (db, "inventario"), where ("idCat", "==", idCategoria)) : collection (db, "inventario");
  
    getDocs(misProductos)
      .then (res=>{
        const nuevosProductos= res.docs.map(doc=> {
          const data=doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error=>console.log(error))
  },[idCategoria])

    return (
        <div>
            <h2 className="titulo">{pageTitle}</h2>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer