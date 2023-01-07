require('dotenv').config();

const config = {
    port_db: process.env.MYSQLPORT || process.env.PORT_DB_LOCAL,
    localhost: process.env.MYSQLHOST || process.env.LOCALHOST_DB_LOCAL,
    user_db: process.env.MYSQLUSER || process.env.USER_DB_LOCAL,
    password: process.env.MYSQLPASSWORD || process.env.PASSWORD_DB_LOCAL,
    name_db: process.env.MYSQLDATABASE || process.env.NAME_DB_LOCAL,
    port_server: process.env.PORT || 3000,
};
module.exports = { config };
