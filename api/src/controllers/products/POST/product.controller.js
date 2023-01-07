const { ProductServices } = require('../../../services/product.services');

const products = new ProductServices();
const postProduct = async (req, res, next) => {
    try {
        const productCreated = await products.createProduct(req.body);
        res.status(200).send(productCreated);
    } catch (e) {
        next(e);
    }
};
module.exports = { postProduct };
