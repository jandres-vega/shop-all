require('dotenv').config();

const config = {
    port_db: process.env.PORT_DB || 30001,
    user_db: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    name_db: process.env.NAME_DB,
    port_server: process.env.PORT_SERVER
}
module.exports = {config}