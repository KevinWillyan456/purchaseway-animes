const animes = require('./animes.json');
const Anime = require('../../models/Anime');

const carregarAnimes = (()=>{
	const lista = [];
	for (i in animes){
		lista.push(new Anime(animes[i]));
	}
	return lista;
})();

module.exports = {
	carregarAnimes
};