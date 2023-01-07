const { Router } = require('express');
const {
    subCategoriesController,
    getSubCategoriesById,
} = require('../controllers/subCategories/GET/subCategory.controller');
const {
    createSubCategory,
} = require('../controllers/subCategories/POST/subCategories.controller');
const {
    updateSubCategory,
} = require('../controllers/subCategories/PUT/subCategories.controller');
const {
    deleteSubCategory,
} = require('../controllers/subCategories/DELETE/subCategories.controller');
const { createSubCategorySchema } = require('../schemas/subCategory.schema');
const { validatorHandler } = require('../middlewares/validator.handlers');

const route = Router();

route.post(
    '/',
    validatorHandler(createSubCategorySchema, 'body'),
    createSubCategory,
);
route.get('/', subCategoriesController);
route.get('/:id', getSubCategoriesById);
route.put('/:id', updateSubCategory);
route.delete('/:id', deleteSubCategory);

module.exports = route;
