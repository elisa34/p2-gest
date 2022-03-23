const http = require('http');
const app = require('./app');
var mysql = require('mysql');


app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);


//connexion entre l'api et la bdd  // 
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'newuser',
    password : 'password',
    database: 'form',
    port: 3306,
    insecureAuth : true
  });
  
  connection.connect();
  
  connection.query('SELECT * from contacts', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
  console.log('tout va bien');
  connection.end();

server.listen(process.env.PORT || 3000);

