const routeProducts = require('./product.routes');
const routeCategories = require('./categorie.routes');
function routes(app) {
    app.use('/products', routeProducts);
    app.use('/categories', routeCategories);
}

module.exports = {routes}