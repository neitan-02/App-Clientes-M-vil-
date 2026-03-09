const db = require('../config/database'); 

const Product = {
    obtenerProductos: (callback) => {
        const query = `SELECT id, name, price, image FROM products`;
        db.all(query, [], (err, filas) => {
            callback(err, filas);
        });
    },

    obtenerPorId: (id, callback) => {
        const query = `SELECT image, name, description, price FROM products WHERE id = ?`;
        db.get(query, [id], (err, filas) => {
            callback(err, filas);
        });
    }
};

module.exports = Product;