const {
    SubCategoriesServices,
} = require('../../../services/subCategories.services');

const subCategory = new SubCategoriesServices();

const createSubCategory = async (req, res, next) => {
    try {
        const { body } = req;
        const createSubCategory = await subCategory.createSubCategories(body);
        res.status(200).send(createSubCategory);
    } catch (e) {
        next(e);
    }
};

module.exports = { createSubCategory };
