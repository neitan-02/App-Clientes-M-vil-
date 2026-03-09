const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

router.get('/products/obtenerProducts', product.listaProductos);

router.get('/products/obtenerDetalleProduct/:pkProduct', product.detalleProducto);

module.exports = router;