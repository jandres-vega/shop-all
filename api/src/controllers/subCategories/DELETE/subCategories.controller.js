const {
    SubCategoriesServices,
} = require('../../../services/subCategories.services');

const subCategory = new SubCategoriesServices();
const deleteSubCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const deleteSubCategory = await subCategory.deleteSubCategoryById(
            Number(id),
        );
        res.status(200).send(deleteSubCategory);
    } catch (e) {
        next(e);
    }
};

module.exports = { deleteSubCategory };
