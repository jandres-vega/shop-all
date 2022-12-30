const {Sequelize} = require('sequelize');
const {config} = require('../config/config');

const URL_DB = `mysql://${config.user_db}:${config.password}@localhost:${config.port_db}/${config.name_db}`;

const sequelize = new Sequelize(URL_DB, {
    dialect: 'mysql'
});



