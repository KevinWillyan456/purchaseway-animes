// Import
const express = require('express');
const app = express();
const port = 5000;

// View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Pages
const indexController = require('./controllers/index-controller');
app.use('/', indexController);
const akameC = require('./controllers/akame-ga-kill');
app.use('/', akameC);

// Server Listen
app.listen(port, () => console.log(`Servidor rodando ${port}`));