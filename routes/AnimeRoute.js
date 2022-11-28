const AnimeController = require('../controllers/AnimeController');

module.exports = (router) =>{
	router.get('/animes', AnimeController.get);
	router.get('/animes/:id', AnimeController.getById);
	router.post('/animes', AnimeController.post);
	router.put('/animes/:id', AnimeController.put);
	router.delete('/animes/:id', AnimeController.remove);	
}