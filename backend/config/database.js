require("dotenv").config();

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(process.env.DB_PATH, (err) => {
    if (err) {
        console.error("Error al conectar sqlite", err);
    } else {
        console.log("Sqlite conectado con exito");
    }
});

module.exports = db;