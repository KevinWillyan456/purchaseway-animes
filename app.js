// Import
const express = require('express');
const app = express();
const port = 5000;

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
const dateALive = require('./controllers/date-a-live');
app.use('/', dateALive);
const ijiraideNagatoro = require('./controllers/ijiranaide-nagatoro');
app.use('/', ijiraideNagatoro);
const kimiNoNaWa = require('./controllers/kimi-no-na-wa');
app.use('/', kimiNoNaWa);
const maiddragon = require('./controllers/maid-dragon');
app.use('/', maiddragon);
const majonotabitabi = require('./controllers/majo-no-tabitabi');
app.use('/', majonotabitabi);
const nogamenolife = require('./controllers/no-game-no-life');
app.use('/', nogamenolife);
const shinnonakama = require('./controllers/shin-no-nakama');
app.use('/', shinnonakama);
const spyxfamily = require('./controllers/spy-x-family');
app.use('/', spyxfamily);

// Server Listen
app.listen(port, () => console.log(`Servidor rodando ${port}`));