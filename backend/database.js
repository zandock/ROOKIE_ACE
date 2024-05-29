const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'db_rookieace',
    user: 'admin',
    password: 'admin'
});

connection.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexión a la BD exitosa.');
    }
});

module.exports = connection;