const productos = [
    { nombre: "Guante Valhalla 2.0", precio: 23000, id: "1", img: "../img/guantebox1.jpg", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante Box Silver & Grey", precio: 18500, id: "2", img: "../img/guantebox2.jpg", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante Box Pink & Cream", precio: 18500, id: "3", img: "../img/guantebox3.jpg", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante MMA Fighter Black", precio: 17000, id: "4", img: "../img/guantemma1.jpg", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante MMA Fighter Fluo", precio: 18000, id: "5", img: "../img/guantemma2.jpg", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante MMA Sparring 8oz", precio: 17000, id: "6", img: "../img/guantemma3.jpg", idCat: "2", categoria: "GUANTES"},
    { nombre: "Kimono Pro White", precio: 34000, id: "7", img: "../img/kimonob1.jpg", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Pro Blue", precio: 34000, id: "8", img: "../img/kimonoa1.jpg", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Pro Black", precio: 34000, id: "9", img: "../img/kimonon1.jpg", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Pro Grey", precio: 34000, id: "10", img: "../img/kimonog1.jpg", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Pro Female", precio: 34000, id: "11", img: "../img/kimonof1.jpg", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Buzo Old School Venum", precio: 19000, id: "12", img: "../img/buzo1.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Campera Basic Grey", precio: 19500, id: "13", img: "../img/campera1.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Campera Brazilian", precio: 21800, id: "14", img: "../img/campera2.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Rashguard Contender White", precio: 15000, id: "15", img: "../img/lycra1.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Rashguard American", precio: 14800, id: "16", img: "../img/lycra2.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Remera Red Snake", precio: 13400, id: "17", img: "../img/remera1.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Remera Fit Blue", precio: 14000, id: "18", img: "../img/remera2.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Remera La Catrina", precio: 13400, id: "19", img: "../img/remera3.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Championship", precio: 13000, id: "20", img: "../img/short1.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Orange Lion", precio: 13000, id: "21", img: "../img/short2.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Fight 2.0 Blue", precio: 12500, id: "22", img: "../img/short3.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short ProGear", precio: 12500, id: "23", img: "../img/short4.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Bolso Classic L", precio: 32000, id: "24", img: "../img/bolso1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Bolso Contender L", precio: 34800, id: "25", img: "../img/bolso2.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Mochila Táctica", precio: 27000, id: "26", img: "../img/mochila1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Llavero", precio: 2000, id: "27", img: "../img/llavero1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Rodillera Pro 2.0", precio: 4500, id: "28", img: "../img/rodillera1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Ojotas Championship", precio: 8000, id: "29", img: "../img/ojotas1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Vendas Classic", precio: 4000, id: "30", img: "../img/vendas1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Mouthguard Pro 2.0", precio: 6700, id: "31", img: "../img/bucal1.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Gorra Classic", precio: 7500, id: "32", img: "../img/gorra1.jpg", idCat: "4", categoria: "ACCESORIOS"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}