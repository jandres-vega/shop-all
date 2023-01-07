const { models } = require('../libs/conexion');
const boom = require('@hapi/boom');

class SubCategoriesServices {
    async findAllSubCategories() {
        return await models.SubCategory.findAll();
    }

    async createSubCategories(body) {
        const { name_subcategory, image_subCategory, CategoryId } = body;
        const getSubCategories = await this.findAllSubCategories();
        const subCategory = getSubCategories.find(
            (subCategory) =>
                subCategory.name_subcategory === name_subcategory ||
				subCategory.image_subCategory === image_subCategory,
        );
        if (subCategory) {
            return 'La subcategoria ya se encuentra registrada';
        } else {
            const category = await models.Categories.findByPk(Number(CategoryId));
            if (!category) {
                throw new boom.notFound(
                    `La categoria con el ID ${CategoryId} no fue encontrada`,
                );
            } else {
                return models.SubCategory.create(body);
            }
        }
    }

    async findSubCategoryById(id) {
        const subCategory = await models.SubCategory.findOne({
            where: { id: id },
            include: [
                {
                    model: models.Categories,
                },
            ],
        });
        if (!subCategory) {
            throw new boom.notFound('subCategory not found');
        } else {
            return subCategory;
        }
    }

    async deleteSubCategoryById(id) {
        const getSubCategory = await this.findSubCategoryById(id);
        if (!getSubCategory) throw new boom.notFound('subCategory not found');
        else {
            return await getSubCategory.destroy();
        }
    }

    async updateSubCategoryById(id, body) {
        const getSubCategory = await this.findSubCategoryById(id);
        if (!getSubCategory) throw new boom.notFound('subCategory not found');
        else return await getSubCategory.update(body);
    }
}

module.exports = { SubCategoriesServices };
