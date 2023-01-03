const {CategoriesServices} = require('../../../services/categorie.services');

const category = new CategoriesServices();

const createCategory = async(req, res, next) => {
    try {
        const categories = await category.createCategory(req.body);
        res.status(200).send(categories);
    }catch (e) {
        next(e)
    }
}

module.exports = {createCategory}