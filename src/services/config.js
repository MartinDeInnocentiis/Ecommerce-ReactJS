// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar estas dos funciones de la librería Firebase. 
//initializeApp = esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE. 
//getFirestore = se utiliza para obtener una instancia de Firestore.

//Estamos trabajando con un objeto con toda nuestra información de la cuenta. Acá se incluye la key personal de acceso a la BD. 
const firebaseConfig = {
  apiKey: "AIzaSyBsP2XWxxDMtyiz4OJpr5SJTDPcXZ8k81c",
  authDomain: "ecommerce-fightshop.firebaseapp.com",
  projectId: "ecommerce-fightshop",
  storageBucket: "ecommerce-fightshop.appspot.com",
  messagingSenderId: "380494690866",
  appId: "1:380494690866:web:fc1ebb37537baa36581a2b"
};

//Inicializamos Firebase y se pasa la configuración como argumento. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicación. 