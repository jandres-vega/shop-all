const { app } = require('./src/App');
const sequelize = require('./src/libs/conexion');
const { config } = require('./src/config/config');

//true = cada vez que levantamos el servidor elimina el contenido de la base de datos
//false = me mantiene el contenido de la base de datos sin importar si tumbo el servidor

sequelize.sync({ force: true }).then(async () => {
    app.listen(config.port_server, async () => {
        console.log(`listening on ${config.port_server}`);
    });
});
