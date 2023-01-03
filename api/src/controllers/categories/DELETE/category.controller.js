const {CategoriesServices} = require('../../../services/categorie.services');

const category = new CategoriesServices();
const deleteCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        const categoryDelete = await  category.deleteCategoryById(id);
        res.status(200).send(categoryDelete)
    }catch (e) {
        next(e)
    }
}

module.exports = {deleteCategory}