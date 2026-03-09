const Product = require('../models/Product');

const product = {
    listaProductos: (req, res) => {
        Product.obtenerProductos((err, product) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(product);
        });
    },

    detalleProducto: (req, res) => {
        const id = req.params.pkProduct;
        Product.obtenerPorId(id, (err, product) => {
            if (err) return res.status(500).json({ err: err.message });
            if (!product) return res.status(400).json({ message: 'Producto no encontrado' });
            res.json(product);
        });
    }
};

module.exports = product;