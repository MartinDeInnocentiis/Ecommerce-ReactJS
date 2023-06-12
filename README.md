# FightFever Shop

FightFever Shop es un proyecto de ecommerce App desarrollado con ReactJS. Esta aplicación permite a los usuarios ver una lista de productos disponibles y realizar compras en línea. El catálogo de productos y la información de las órdenes se almacenan en Firebase.

## Tecnologías utilizadas
- React
- React Router
- Firebase

## Funcionalidades
- Ver una lista de productos disponibles
- Agregar productos al carrito de compras
- Ver el carrito de compras
- Realizar una orden de compra

## Instalación

### Para instalar y ejecutar la aplicación en tu máquina local, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm start para iniciar la aplicación.
5. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, sigue estos pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Autenticación" de Firebase, habilita el proveedor de autenticación por correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir el acceso de lectura/escritura solo a usuarios autenticados.
4. En la sección "Configuración del proyecto" de Firebase, haz clic en "Agregar aplicación" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.