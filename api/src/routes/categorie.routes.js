const {Router} = require('express');
const {getAllCategories, getCategoryById} = require('../controllers/categories/GET/category.controller');
const {createCategory} = require('../controllers/categories/POST/category.controller');
const {validatorHandler} = require('../middlewares/validator.handlers');
const {createCategorySchema} = require('../schemas/category.schema');
const {deleteCategory} = require('../controllers/categories/DELETE/category.controller');
const {updateCategory} = require('../controllers/categories/UPDATE/category.controller');
const route = Router();

route.post('/', validatorHandler(createCategorySchema, 'body'), createCategory);
route.get('/', getAllCategories);
route.get('/:id', getCategoryById);
route.delete('/:id', deleteCategory)
route.put('/:id', updateCategory )

module.exports = route;