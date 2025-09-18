const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log(`Errore connessione al dataBase ${err}`)
  }
  else {
    console.log(`connesso al dataBase`)
  }
});

module.exports = connection;