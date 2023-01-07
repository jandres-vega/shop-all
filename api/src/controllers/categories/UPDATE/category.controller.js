const { CategoriesServices } = require('../../../services/categorie.services');

const category = new CategoriesServices();
const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const putCategory = await category.updateCategoryById(id, body);
        res.status(200).send(putCategory);
    } catch (e) {
        next(e);
    }
};
module.exports = { updateCategory };
