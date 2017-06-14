var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('You are now connected');
});

connection.query('SELECT * FROM messages', function (err, rows, fields) {
  if (err) {
    throw err;
  }
  for (var i in rows) {
    console.log('Messages: ', rows[i].message);
  }
});

connection.end();