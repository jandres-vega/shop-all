const { ProductServices } = require('../../../services/product.services');

const products = new ProductServices();
const getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await products.findAllProducts();
        res.status(200).send(allProducts);
    } catch (e) {
        next(e);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await products.findProductById(Number(id));
        res.status(200).send(product);
    } catch (e) {
        next(e);
    }
};

module.exports = { getAllProducts, getProductById };
