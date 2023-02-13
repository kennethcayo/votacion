const mongoose = require('mongoose');


const database = mongoose.connect('mongodb://192.168.0.100:3001/CNE')
.then(db => console.log('Base de datos conectada!' ))
.catch(err => console.log(err))



module.exports = database;

