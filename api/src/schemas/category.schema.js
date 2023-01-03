const joi = require('joi');

const createCategorySchema = joi.object({
    name_category: joi.string().required().min(3).max(45),
    image_category: joi.string().uri().required(),
    description: joi.string()
});

module.exports = {createCategorySchema}