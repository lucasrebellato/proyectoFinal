const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const productRoutes = require('./products/routes')
// const cartRoutes = require('./cart/routes')
// const userRoutes = require('./users/routes')

require('dotenv').config();

const cors = (req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   next();
}

//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

//cors, configurar cabeceras http
app.use(cors);

app.use("/Tienda", productRoutes);
// app.use("/Tienda/Carrito", cartRoutes);
// app.use("/Sign-Up", userRoutes);

app.listen(8080,() => {
    console.log("El server esta corriendo en el puerto 8080");
})