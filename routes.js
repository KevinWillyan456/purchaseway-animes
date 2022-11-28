const express = require('express');
const AnimeRoute = require('./routes/AnimeRoute');
const routerApi = express.Router();

const loadRoutes = (app) => {
  AnimeRoute(routerApi);
  app.use('/api', routerApi);
}

module.exports = {
  loadRoutes
}