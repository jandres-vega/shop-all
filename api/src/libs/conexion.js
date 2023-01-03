const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const {setupModels} = require('../db/index');
const password = decodeURIComponent(config.password);
const user = encodeURIComponent(config.user_db);

const URL_DB = `mysql://${user}:${password}@${config.localhost}:${config.port_db}/${config.name_db}`;

const sequelize = new Sequelize(URL_DB, {
    dialect: 'mysql',
    logging: false
});

setupModels(sequelize)

module.exports = sequelize



