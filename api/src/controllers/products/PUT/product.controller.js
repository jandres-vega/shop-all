const { ProductServices } = require('../../../services/product.services');

const products = new ProductServices();
const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const product = await products.updateProduct(id, body);
        res.status(200).send(product);
    } catch (e) {
        next(e);
    }
};

module.exports = { updateProduct };
