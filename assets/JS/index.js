const abrirMenu = document.querySelector('.abrir-menu');
const body = document.querySelector('body');

// Menu para versão Mobile
// Bloqueador de repetições
var menuMobileREP = true;
abrirMenu.addEventListener('click', () => {
    if(menuMobileREP){
        menuMobileREP = false;
        var container = document.createElement('div');
        container.setAttribute('class', 'menuMobile');
        container.innerHTML = '<ul><li><a href="/">Início</a></li><li><a href="#">Lista de Animes</a></li><li><a href="#">Favoritos</a></li><li><a href="#">Mangás</a></li><li><a href="#">Calendário</a></li><li><a href="#">Como Assistir?</a></li></ul><div class="menuMobileFechar"><ion-icon name="close-outline"></ion-icon></div>';
        body.append(container);
    }

    document.querySelector('.menuMobileFechar').addEventListener('click', () => {
        menuMobileREP = true;
        container.remove();
    });
});

/* Implementação do sistema de listagem */

let animes = [];
let animesFiltrado = [];

const containerAnimes = $('.lista-animes');
const noFound = $('.no-found');

async function listarAnimesService() {
  const resposta = await fetch('api/animes');
  animes = await resposta.json();
  criaAnimes();
}

listarAnimesService()

function criaAnimes(){
  animes.forEach(anime => {
    containerAnimes.append(`
        <article>
            <a href="${anime.urlRota}">
                <img src="${anime.urlCapa}">
                <h1>${anime.nome}</h1>
            </a>
        </article>
    `)
  })
  console.log(animes)
}

/* Implementando o sistema de busca */

const buscarInput = document.querySelector('#search-anime');


buscarInput.oninput = () => {
  containerAnimes.html("");
  $(noFound).addClass('hidden');
  
  animesFiltrado = animes.filter(
    (anime) =>
      anime.nome.toLowerCase().includes(buscarInput.value.toLowerCase())
      ).forEach(animeFiltrado => {
        containerAnimes.append(`
        <article>
        <a href="${animeFiltrado.urlRota}">
        <img src="${animeFiltrado.urlCapa}">
        <h1>${animeFiltrado.nome}</h1>
        </a>
        </article>
        `)
  })

  if (containerAnimes.html() == ''){
    $(noFound).removeClass('hidden');
  }
};