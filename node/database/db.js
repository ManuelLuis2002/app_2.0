const {Sequelize, Model } = require("sequelize");

const database = new Sequelize('cine','root','',{
    host: 'localhost',
    dialect: 'mysql'
} );

module.exports.database = database;

try{
    database.authenticate();
    console.log("Conectado");
}catch(error){
    console.log("Algo está mal, revisemos")
}

