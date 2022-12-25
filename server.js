const express = require('express');
const routeModule = require('./routes/index')

const app = express()

//** Middleware  */
routeModule.routes(app);

module.exports = app;