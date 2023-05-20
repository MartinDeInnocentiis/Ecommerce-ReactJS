const productos = [
    { nombre: "Guante Box Gold & Black", precio: 23000, id: "1", img: "../img/guantebox11.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante Box Silver & Grey", precio: 18500, id: "2", img: "../img/guantebox21.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante Box Black & Pink", precio: 18500, id: "3", img: "../img/guantebox31.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante Box Loma Limited Edition", precio: 29500, id: "4", img: "../img/guantebox41.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante Box Santa Muerte Limited Edition", precio: 27500, id: "5", img: "../img/guantebox51.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante MMA Mineral Grey", precio: 17000, id: "6", img: "../img/guantemma11.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante MMA Salvia", precio: 18000, id: "7", img: "../img/guantemma21.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Guante MMA Black & Gold", precio: 17000, id: "8", img: "../img/guantemma31.webp", idCat: "2", categoria: "GUANTES"},
    { nombre: "Kimono Contender Pro White", precio: 34000, id: "9", img: "../img/kimono11.webp", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Contender Pro Blue", precio: 34000, id: "10", img: "../img/kimono21.webp", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Contender Pro Black", precio: 34000, id: "11", img: "../img/kimono31.webp", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Contender Pro Grey", precio: 34000, id: "12", img: "../img/kimono41.jpg", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Kimono Contender Kids", precio: 34000, id: "13", img: "../img/kimono51.webp", idCat: "1", categoria: "KIMONOS"},
    { nombre: "Musculosa Classic Black & Gold", precio: 14000, id: "14", img: "../img/musculosa11.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Jogger Phantom Black & Blue", precio: 21500, id: "15", img: "../img/jogger11.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Jogger Vortex Mocha", precio: 20000, id: "16", img: "../img/jogger21.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Rashguard Contender Black & White", precio: 15000, id: "17", img: "../img/lycra11.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Rashguard Plasma", precio: 16800, id: "18", img: "../img/lycra22.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Rasguard Gladiator 3.0", precio: 14400, id: "19", img: "../img/lycra31.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Remera Classic Navy Blue", precio: 13000, id: "20", img: "../img/remera11.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Remera Compression Black", precio: 15000, id: "21", img: "../img/remera21.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Camo Championship", precio: 13000, id: "22", img: "../img/short11.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Gladiator 3.0", precio: 13000, id: "23", img: "../img/short21.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Light 3.0 Black", precio: 12500, id: "24", img: "../img/short31.jpg", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Short Light 3.0 Black & White", precio: 12500, id: "25", img: "../img/short41.webp", idCat: "3", categoria: "INDUMENTARIA"},
    { nombre: "Bolso Trainer Lite", precio: 32000, id: "26", img: "../img/bolso11.webp", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Bolso Reorg Pink", precio: 34800, id: "27", img: "../img/bolso21.webp", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Bolso Lite Evo", precio: 27000, id: "28", img: "../img/bolso31.webp", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Medias Classic Pack x3", precio: 4600, id: "29", img: "../img/medias11.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Rodillera Pro Black & Gold", precio: 4500, id: "30", img: "../img/rodillera11.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Cabezal Challenger 2.0", precio: 18000, id: "31", img: "../img/cabezal11.jpg", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Vendas Classic", precio: 4000, id: "32", img: "../img/vendas11.webp", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Mouthguard Predator 2.0", precio: 6700, id: "33", img: "../img/bucal11.webp", idCat: "4", categoria: "ACCESORIOS"},
    { nombre: "Gorra Classic", precio: 7500, id: "34", img: "../img/gorra11.jpg", idCat: "4", categoria: "ACCESORIOS"},
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