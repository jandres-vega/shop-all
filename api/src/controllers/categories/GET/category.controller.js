const { CategoriesServices } = require("../../../services/categorie.services");
const { boomErrorHandler } = require("../../../middlewares/errors.handlers");

const categories = new CategoriesServices();
const getAllCategories = async (req, res, next) => {
  try {
    const allCategories = await categories.findAllCategories();
    res.status(200).send(allCategories);
  } catch (e) {
    next(e);
  }
};
const getCategoryById = async (req, res, next) => {
  try {
    const category = await categories.findCategoryById(Number(req.params.id));
    res.status(200).send(category);
  } catch (e) {
    next(e);
  }
};

const filterByCategories = async (req, res, next) => {
  try {
    const { sub_category } = req.query;
    const categoriesFilters = await categories.getCategoriesFilters(sub_category);
    res.status(200).send(categoriesFilters);
  } catch (e) {
    next(e);
  }
};

module.exports = { getAllCategories, getCategoryById, filterByCategories };
