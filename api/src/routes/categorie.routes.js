const {Router} = require('express');
const {getAllCategories} = require('../controllers/categories/GET/category.controller');
const {createCategory} = require('../controllers/categories/POST/category.controller');
const {validatorHandler} = require('../middlewares/validator.handlers');
const {createCategorySchema} = require('../schemas/category.schema');
const {deleteCategory} = require('../controllers/categories/DELETE/category.controller');

const route = Router();

route.get('/', getAllCategories);
route.post('/', validatorHandler(createCategorySchema, 'body'), createCategory);
route.delete('/:id', deleteCategory)

module.exports = route;