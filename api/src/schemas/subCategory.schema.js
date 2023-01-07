const joi = require('joi');

const createSubCategorySchema = joi.object({
    name_subcategory: joi.string().min(3).max(45).required(),
    image_subCategory: joi.string().min(3).required(),
    CategoryId: joi.number().integer().required(),
});

module.exports = { createSubCategorySchema };
