const sqlite3 = requiere(sqlite3).verbose();

const db = new sqlite3.Database('/database.sqlite', (err) => {
    if (err) {
        console.error("Error al conectar sqlite", err)
    } else {
        console.log("Sqlite conectado con exito")
    }
});

module.exports = db;