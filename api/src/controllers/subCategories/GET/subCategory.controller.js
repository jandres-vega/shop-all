const {
    SubCategoriesServices,
} = require('../../../services/subCategories.services');

const subCategory = new SubCategoriesServices();
const subCategoriesController = async (req, res, next) => {
    try {
        const getSubCategories = await subCategory.findAllSubCategories();
        res.status(200).send(getSubCategories);
    } catch (e) {
        next(e);
    }
};

const getSubCategoriesById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const getSubCategory = await subCategory.findSubCategoryById(Number(id));
        res.status(200).send(getSubCategory);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    subCategoriesController,
    getSubCategoriesById,
};
