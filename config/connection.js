const mysql = require("mysql");

let db;

if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0201123rR$",
    database: "notetaker_db"
  });
}

module.exports = db;