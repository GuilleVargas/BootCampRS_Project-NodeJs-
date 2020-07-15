/**ESTE ARCHIVO SIRVE PARA CONECTAR LA DB*/

const mongoose = require("mongoose");
const URI = "mongodb://localhost/proyectoRS"; //Defino la conexión de mongo en la constante URI


mongoose.connect(URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is Conncted")) 
  .catch((err) => console.log(err)); 

  module.exports = mongoose; 