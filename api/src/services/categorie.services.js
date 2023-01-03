const {models} = require('../libs/conexion');
const boom = require('@hapi/boom');

class CategoriesServices {

    async findAllCategories() {
        return await models.Categories.findAll();
    }
    async createCategory(body) {
        const {name_category} = body;
        const allCategories = await this.findAllCategories();
        const repeatCategory = allCategories.find(category => category.name_category === name_category);
        if (repeatCategory) {
            return 'La categoria ya se encuentra registrada'
        }else {
            return models.Categories.create(body)
        }
    }

    async findCategoryById(id) {
        const category = await models.Categories.findByPk(id);
        if (!category) throw new boom.notFound('category not found');
        else return category
    }
    async deleteCategoryById(id) {
        const category = await this.findCategoryById(Number(id));
        if (!category) throw new boom.notFound('category not found');
        else {
            return await category.destroy()
        }

    }
}

module.exports = {CategoriesServices}