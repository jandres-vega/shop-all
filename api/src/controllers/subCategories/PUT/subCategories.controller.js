const {
    SubCategoriesServices,
} = require('../../../services/subCategories.services');

const subCategory = new SubCategoriesServices();
const updateSubCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const updateSubCategory = await subCategory.updateSubCategoryById(
            Number(id),
            body,
        );
        res.status(200).send(updateSubCategory);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    updateSubCategory,
};
