const { Router } = require('express');
const {
    postProduct,
} = require('../controllers/products/POST/product.controller');
const { validatorHandler } = require('../middlewares/validator.handlers');
const { createProduct } = require('../schemas/product.schema');
const {
    getAllProducts,
    getProductById,
} = require('../controllers/products/GET/product.controller');
const {
    deleteProduct,
} = require('../controllers/products/DELETE/product.controller');
const {
    updateProduct,
} = require('../controllers/products/PUT/product.controller');

const route = Router();
route.post('/', validatorHandler(createProduct, 'body'), postProduct);
route.get('/', getAllProducts);
route.get('/:id', getProductById);
route.put('/:id', updateProduct);
route.delete('/:id', deleteProduct);

module.exports = route;
