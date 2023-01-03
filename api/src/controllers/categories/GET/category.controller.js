const {CategoriesServices} = require('../../../services/categorie.services');

const categories = new CategoriesServices();
const getAllCategories = async(req, res, next) => {
    try {
        const allCategories = await categories.findAllCategories();
        res.status(200).send(allCategories)
    }catch (e) {
        next(e)
    }
}

module.exports = {getAllCategories}