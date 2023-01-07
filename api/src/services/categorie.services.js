const { models } = require('../libs/conexion');
const boom = require('@hapi/boom');

class CategoriesServices {
    async findAllCategories() {
        return await models.Categories.findAll({
            include: [
                {
                    model: models.SubCategory,
                },
            ],
        });
    }
    async createCategory(body) {
        const { name_category } = body;
        const allCategories = await this.findAllCategories();
        const repeatCategory = allCategories.find(
            (category) => category.name_category === name_category,
        );
        if (repeatCategory) {
            return 'La categoria ya se encuentra registrada';
        } else {
            return models.Categories.create(body);
        }
    }

    async findCategoryById(id) {
        const category = await models.Categories.findByPk(id, {
            include: [
                {
                    model: models.Products,
                },
                {
                    model: models.SubCategory,
                    attributes: ['id', 'name_subcategory', 'image_subCategory'],
                },
            ],
        });
        if (!category) throw new boom.notFound('category not found');
        else return category;
    }
    async deleteCategoryById(id) {
        const category = await this.findCategoryById(id);
        if (!category) throw new boom.notFound('category not found');
        else {
            return await category.destroy();
        }
    }
    async updateCategoryById(id, body) {
        const category = await this.findCategoryById(id);
        console.log(category);
        if (!category) {
            throw new boom.notFound('category not found');
        } else {
            return await category.update(body);
        }
    }
}

module.exports = { CategoriesServices };
