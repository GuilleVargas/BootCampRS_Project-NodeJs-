/**
 * ESTE ARCHIVO SIRVE PARA ARRANCAR EL SERVIDOR
 */

const express = require('express');
const app = express();

const morgan = require("morgan");
const cors = require("cors");

const { mongoose } = require("./database");

//SETTINGS
app.set("port", process.env.PORT || 3000);

/**
 * MIDDLEWARES
 * ! Realizar la conversión para que el servidor pueda entender los datos
 * ? Morgan no es esencial, pero nos ayuda a ver por consola lo que el usuario pide
 */
app.use(morgan("dev"));
app.use(express.json()); 
app.use(cors({origin: 'http://localhost:4200'}));




/**
 * ROUTES
 * ! Aquí vamos requiriendo las diferentes rutas en tengamos en la carpeta routes
 * ? Ahora mismo sólo tenemos la de index.js
 */
app.use( require("./routes/index"));
app.use('/patient', require("./routes/patient.routes"));
app.use('/profesional', require("./routes/profesional.routes"));


//Inicio la aplicación 
app.listen(app.get("port"), () => {
  console.log(
    "Server is conected on port",
    app.get("port")
  ); 
}); 