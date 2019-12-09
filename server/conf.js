const mysql = require('mysql')
// require('dotenv').config(process.cwd(), '.env')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bdd_noel'
})

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database", err);
    }
});

module.exports = connection