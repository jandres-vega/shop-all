const { models } = require('../libs/conexion');
const { SubCategoriesServices } = require('./subCategories.services');
const boom = require('@hapi/boom');

const categories = new SubCategoriesServices();

class ProductServices {
    async findAllProducts() {
        return await models.Products.findAll({
            include: [
                {
                    model: models.SubCategory,
                    attributes: ['id', 'name_subcategory', 'image_subCategory'],
                },
            ],
        });
    }

    async findProductById(id) {
        if (!id) {
            throw new boom.badRequest('Requiere de un id');
        }
        const product = await models.Products.findOne({
            where: { id: id },
            include: [
                {
                    model: models.SubCategory,
                    attributes: ['id', 'name_subcategory', 'image_subCategory'],
                },
            ],
        });
        if (!product) {
            throw new boom.notFound('product not found');
        } else {
            return product;
        }
    }

    async createProduct(body) {
        const { name_product, image, SubCategoryId } = body;

        const getProducts = await this.findAllProducts();

        const productRepeat = getProducts.find(
            (product) =>
                product.name_product === name_product || product.image === image,
        );
        if (productRepeat) {
            return 'El producto se encuentra repetido';
        } else {
            const category = await categories.findSubCategoryById(
                Number(SubCategoryId),
            );
            if (!category) throw new boom.notFound();
            else {
                return models.Products.create(body);
            }
        }
    }

    async deleteProduct(id) {
        const product = await this.findProductById(id);
        if (!product) {
            throw new boom.notFound('product not found');
        } else {
            return await product.destroy();
        }
    }

    async updateProduct(id, body) {
        const product = await this.findProductById(id);
        if (!product) {
            throw new boom.notFound('product not found');
        } else {
            return await product.update(body);
        }
    }
}

module.exports = { ProductServices };
