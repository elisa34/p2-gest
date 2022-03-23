const express = require('express') ;
var mysql = require('mysql');


const app = express();

app.use((req, res) => {
    res. json({ message: 'Votre requête a bien êtê regue !' });
});



//connexion entre l'api et la bdd  // 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });
console.log('tout va bien');
connection.end();
module.exports = app;