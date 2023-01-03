const {Router} = require('express');
const {postProduct} = require('../controllers/products/POST/product.controller');
const {validatorHandler} = require('../middlewares/validator.handlers');
const {createProduct} = require('../schemas/product.schema');
const {ProductServices} = require('../services/product.services');
const {getAllProducts} = require('../controllers/products/GET/product.controllers');

const route = Router()

const products = new ProductServices();

route.get('/', getAllProducts )
route.post('/', validatorHandler(createProduct, 'body'), postProduct)

module.exports = route;