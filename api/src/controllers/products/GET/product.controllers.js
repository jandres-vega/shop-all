const {ProductServices} = require('../../../services/product.services');

const products = new ProductServices()
const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await products.findAllProducts();
        res.status(200).send(allProducts);
    }catch (e) {
        next(e);
    }
}

module.exports = {getAllProducts}