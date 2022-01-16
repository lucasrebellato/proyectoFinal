const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./infrastructure/db');
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

const cartRoutes = require('./cart/routes')
const productRoutes = require('./products/routes')
const userRoutes = require('./users/routes');
const { router } = require('json-server');


app.use(express.json());

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
app.use(
  cors
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use("/Shop", productRoutes);
app.use("/Shop/Cart", cartRoutes);
app.use("/Users", userRoutes);

app.listen(8020,() => {
    console.log("El server esta corriendo en el puerto 8020");
})