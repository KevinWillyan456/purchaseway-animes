const Anime = require('../models/Anime');
const animes = require('../database/data').carregarAnimes || [];

exports.get = (req, res) => {
	const {nome} = req.query;
	if(nome){
		return res.json(
			animes.filter(anime => anime.nome.toLowerCase()
			.includes(nome.toLowerCase()))
		);
	}
	res.json(animes);
};
exports.getById = (req, res) => {
	const {id} = req.params;
	res.json(
		animes.filter(anime => anime.id == id)
	);
};
exports.post = (req, res)  => {
	const anime = new Anime(req.body);
	animes.push(anime);
	res.status(201).json({msg:'anime cadastrado com sucesso'})
}
exports.put = (req, res) => {
	const {id} = req.params;
	for (i in animes){
		if(animes[i].id == id){
			animes[i] = new Anime(req.body);
			return res.status(201).json({msg: 'anime atualizado com sucesso'});
		}
	}
	res.status(404).json({msg: 'anime não existe'});
};
exports.remove = (req, res) => {
	const {id} = req.params;
	for (i in animes){
		if(animes[i].id == id){
			animes.splice( i, 1);
			return res.status(200).json({msg: 'anime excluído com sucesso'});
		}
	}
	res.status(404).json({msg: 'anime não existe'});
};