module.exports = class Anime {
	constructor({id, nome, ano, genero, urlCapa, urlRota, urlTrailer, sinopse}) {
		this.id = id || Math.floor(+new Date() / 1000);
		this.nome = nome;
		this.ano = ano;
		this.genero = genero;
		this.urlCapa = urlCapa;
		this.urlRota = urlRota;
        this.urlTrailer = urlTrailer;
		this.sinopse = sinopse;
	}
}
