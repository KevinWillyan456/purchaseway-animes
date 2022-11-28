const api = "/api";
let animes = [];

async function listarAnimesService() {
  const resposta = await fetch(`${api}/animes`);
  animes = await resposta.json();
  mostrarAnimes(animes);
}

async function cadastrarAnimeService(anime) {
  const resposta = await fetch(`${api}/animes`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(anime)
  });
  if(resposta.status != 201)
    return alert('Erro ao cadastrar Anime!');

  listarAnimesService();
}

async function editarAnimeService(anime) {
  const resposta = await fetch(`${api}/animes/${anime.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(anime)
  });
  if(resposta.status != 201)
    return alert('Erro ao editar Anime!');

  listarAnimesService();
}

async function excluirAnimeService(id) {
  const resposta = await fetch(`${api}/animes/${id}`, {
    method: "DELETE"
  });
  if(resposta.status != 200)
    return alert('Erro ao excluir Anime!');

  listarAnimesService();
}

async function cadastrarAnime() {
  const nomeInputText = document.getElementById("add-nome");
  const generoInputText = document.getElementById("add-genero");
  const anoInputText = document.getElementById("add-ano");
  const urlCapaInputText = document.getElementById("add-urlcapa");
  const urlTrailerInputText = document.getElementById("add-urltrailer");
  const sinopseInputText = document.getElementById("add-sinopse");

  const anime = {
    nome: nomeInputText.value.trim(),
    genero: generoInputText.value.trim(),
    ano: parseInt(anoInputText.value.trim()),
    urlCapa: urlCapaInputText.value.trim(),
    urlTrailer: urlTrailerInputText.value.trim(),
    sinopse: sinopseInputText.value.trim()
  };

  await cadastrarAnimeService(anime);
}

async function excluirAnime() {
  const animeId = document.getElementById("delete-id").value.trim();
  await excluirAnimeService(animeId)
}

function mostrarFormExclusaoAnime(id) {
  const anime = animes.find(item => item.id === id);
  document.getElementById("delete-id").value = anime.id;
  document.getElementById("delete-nome").innerText = anime.nome;
}

function mostrarVisualizacaoAnime(id) {
  const anime = animes.find(anime => anime.id === id);
  document.getElementById("view-nome").innerText = anime.nome;
  document.getElementById("view-genero").innerText = anime.genero;
  document.getElementById("view-ano").innerText = anime.ano;
  document.getElementById("view-urlcapa").src = anime.urlCapa;
  document.getElementById("view-urlcapa").alt = anime.nome;
  document.getElementById("view-urltrailer").innerText = anime.urlTrailer;
  document.getElementById("view-urltrailer").href = anime.urlTrailer;
  document.getElementById("view-sinopse").innerText = anime.sinopse;
}

function mostrarFormEdicaoAnime(id) {
  const anime = animes.find(anime => anime.id === id);
  document.getElementById("edit-id").value = anime.id;
  document.getElementById("edit-nome").value = anime.nome;
  document.getElementById("edit-genero").value = anime.genero;
  document.getElementById("edit-ano").value = anime.ano;
  document.getElementById("edit-urlcapa").value = anime.urlCapa;
  document.getElementById("edit-urltrailer").value = anime.urlTrailer;
  document.getElementById("edit-sinopse").value = anime.sinopse;
}

async function editarAnime() {
  const idAnime = document.getElementById("edit-id").value.trim();
  const nomeInputText = document.getElementById("edit-nome");
  const generoInputText = document.getElementById("edit-genero");
  const anoInputText = document.getElementById("edit-ano");
  const urlCapaInputText = document.getElementById("edit-urlcapa");
  const urlTrailerInputText = document.getElementById("edit-urltrailer");
  const sinopseInputText = document.getElementById("edit-sinopse");

  const anime = {
    id: parseInt(idAnime),
    nome: nomeInputText.value.trim(),
    genero: generoInputText.value.trim(),
    ano: parseInt(anoInputText.value.trim()),
    urlCapa: urlCapaInputText.value.trim(),
    urlTrailer: urlTrailerInputText.value.trim(),
    sinopse: sinopseInputText.value.trim()
  };

  await editarAnimeService(anime);
}

function _textoQtdRegistros(qtdAnimes) {
  const mensagem = qtdAnimes === 1 ? "registro" : "registros";
  document.getElementById(
    "counter"
  ).innerHTML = `Mostrando <b>${qtdAnimes}</b> ${mensagem}`;
}

function mostrarAnimes(animes) {
  const tBody = document.getElementById("animes");
  tBody.innerHTML = "";
  _textoQtdRegistros(animes.length);

  animes.forEach(anime => {
    let botaoVisualizarAnime = document.createElement("a");
    botaoVisualizarAnime.href = "#visualizarAnimeModal";
    botaoVisualizarAnime.className = "view";
    botaoVisualizarAnime.setAttribute("onclick", `mostrarVisualizacaoAnime(${anime.id})`);
    botaoVisualizarAnime.setAttribute("data-toggle", "modal");
    botaoVisualizarAnime.innerHTML =
      "<i class='material-icons' data-toggle='tooltip' title='Visualizar'>&#xE8A0;</i>";
    
    let botaoEditarAnime = document.createElement("a");
    botaoEditarAnime.href = "#editarAnimeModal";
    botaoEditarAnime.className = "edit";
    botaoEditarAnime.setAttribute("onclick", `mostrarFormEdicaoAnime(${anime.id})`);
    botaoEditarAnime.setAttribute("data-toggle", "modal");
    botaoEditarAnime.innerHTML =
      "<i class='material-icons' data-toggle='tooltip' title='Editar'>&#xE254;</i>";
    
      let botaoExcluirAnime = document.createElement("a");
    botaoExcluirAnime.href = "#excluirAnimeModal";
    botaoExcluirAnime.className = "delete";
    botaoExcluirAnime.setAttribute("onclick", `mostrarFormExclusaoAnime(${anime.id})`);
    botaoExcluirAnime.setAttribute("data-toggle", "modal");
    botaoExcluirAnime.innerHTML =
      "<i class='material-icons' data-toggle='tooltip' title='Excluir'>&#xE872;</i>";

    let tr = tBody.insertRow();

    let td1 = tr.insertCell(0);
    let elementoTitulo = document.createTextNode(anime.nome);
    td1.appendChild(elementoTitulo);

    let td2 = tr.insertCell(1);
    let elementoGenero = document.createTextNode(anime.genero);
    td2.appendChild(elementoGenero);

    let td3 = tr.insertCell(2);
    let elementoDescricao = document.createTextNode(anime.sinopse.slice(0, 50) + `...`);
    td3.appendChild(elementoDescricao);

    let td4 = tr.insertCell(3);
    td4.appendChild(botaoVisualizarAnime);
    td4.appendChild(botaoEditarAnime);
    td4.appendChild(botaoExcluirAnime);
  });

  animes = animes;
}