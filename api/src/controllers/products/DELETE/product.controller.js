const { ProductServices } = require('../../../services/product.services');

const products = new ProductServices();
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productDelete = await products.deleteProduct(Number(id));
        res.status(200).send(productDelete);
    } catch (e) {
        next(e);
    }
};

module.exports = { deleteProduct };
