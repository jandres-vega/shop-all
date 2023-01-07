const { Products, productSchema } = require('./models/product.model');
const { Categories, categoriesSchema } = require('./models/categories.model');
const {
    SubCategory,
    subCategoriesSchema,
} = require('./models/sucCategories.model');
const setupModels = (sequelize) => {
    Products.init(productSchema, Products.config(sequelize));
    Categories.init(categoriesSchema, Categories.config(sequelize));
    SubCategory.init(subCategoriesSchema, SubCategory.config(sequelize));

    Products.associated(sequelize.models);
    Categories.associated(sequelize.models);
    SubCategory.association(sequelize.models);
};

module.exports = { setupModels };
