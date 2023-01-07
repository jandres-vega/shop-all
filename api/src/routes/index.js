const routeProducts = require('./product.routes');
const routeCategories = require('./categorie.routes');
const routeSubCategories = require('./subCategorie.routes');
function routes(app) {
    app.use('/products', routeProducts);
    app.use('/categories', routeCategories);
    app.use('/sub-categories', routeSubCategories);
}

module.exports = { routes };
