const { models } = require('../libs/conexion');
const boom = require('@hapi/boom');
class ProductServices {
    async findAllProducts() {
        return await models.Products.findAll({
            include: [
                {
                    model: models.Categories,
                    attributes: ['name_category', 'image_category'],
                },
            ],
        });
    }
    async findProductById(id) {
        const product = await models.Products.findOne({
            where: { id: id },
            include: [
                {
                    model: models.Categories,
                    attributes: ['id', 'name_category', 'image_category', 'description'],
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
        const { name_product, image } = body;
        const getProducts = await this.findAllProducts();

        const productRepeat = getProducts.find(
            (product) =>
                product.name_product === name_product || product.image === image,
        );
        if (productRepeat) {
            return 'El producto se encuentra repetido';
        } else {
            return models.Products.create(body);
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
