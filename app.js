// Import
const express = require('express');
const app = express();
const port = 8080;

// View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// # Pages
const indexController = require('./controllers/index-controller');
app.use('/', indexController);

// 10 páginas
const akameGaKill = require('./controllers/akame-ga-kill');
app.use('/', akameGaKill);
const darlinginthefranxx = require('./controllers/darling-in-the-franxx');
app.use('/', darlinginthefranxx);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);
// const akameGaKill = require('./controllers/akame-ga-kill');
// app.use('/', akameGaKill);

// Server Listen
app.listen(port, () => console.log(`Servidor rodando ${port}`));