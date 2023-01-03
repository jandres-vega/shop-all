const express = require('express');
const cors = require('cors');
const {routes} = require('./routes/index');
const morgan = require('morgan');
const {
    logErrors,
    boomErrorHandler,
    errorHandler
} = require('./middlewares/errors.handlers');
const app = express();

const whitelist = ['http://localhost:3006'];

app.use(cors({
    origin: whitelist
}));

app.use(morgan('dev'));
app.use(express.json())

routes(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = {app}