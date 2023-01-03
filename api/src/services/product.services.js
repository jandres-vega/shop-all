const {models} = require('../libs/conexion');

class ProductServices {
    async findAllProducts() {
        return await models.Products.findAll({
            include: [
                {
                    model: models.Categories,
                    attributes:['name_category', 'image_category']
                }
            ]
        });
    }
    async createProduct(body) {
        const {name_product, image} = body;
        const getProducts = await this.findAllProducts();

        const productRepeat = getProducts.find(product =>
            product.name_product === name_product || product.image === image);
        if (productRepeat){
            return 'El producto se encuentra repetido';
        }else {
            return models.Products.create(body);
        }
    }
}

module.exports = {ProductServices}