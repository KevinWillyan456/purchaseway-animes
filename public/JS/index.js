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

const database = [
    {
      "id": 50,
      "nome": "Kobayashi-san Chi no Maid Dragon Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/kobayashi-san-chi-no-maid-dragon-capa.jpg",
      "urlRota": "/md",
      "sinopse": "A Srta. Kobayashi é uma funcionária comum que leva uma vida bem banal e mora sozinha em um pequeno apartamento - até que ela salva a vida de um dragão fêmea em apuros. Esse dragão, chamado Tohru, é capaz de se transformar numa adorável garota humana (com chifres e um longo rabo) que fará de tudo para retribuir seu gesto, queira a Srta. Kobayashi ou não! Com esse persistente e amoroso dragão como colega de apartamento, tudo fica mais difícil, e a vida normal da Srta. Kobayashi está prestes a ir p elos ares!"
    },
    {
      "id": 51,
      "nome": "Akame ga Kill! Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/akame-ga-kill-capa.jpg",
      "urlRota": "/agk",
      "sinopse": "Tatsumi é um lutador que sai para a Capital em busca de uma maneira de ganhar dinheiro para ajudar a sua aldeia pobre, apenas para descobrir a corrupção profunda lá. Depois de ser vítima de um assalto por uma mulher e perder todo o seu dinheiro, Tatsumi é levado por uma menina aristocrática nobre com o nome de Aria. Na noite seguinte, o lugar de Aria é atacado por um grupo de assassinos conhecidos como Noite Raid.Enquanto Tatsumi no primeiro tenta defender Aria do Akame assassino, um outro membr o do grupo pára a luta. Ela revela que Aria raptou vários aldeões e tortura-los para se divertir. Vendo o potencial no Tatsumi, Noite Raid convida o rapaz para o seu aviso grupo que, independentemente de como eles querem assassino pessoas corrompidas, eles são assassinos. Tatsumi aceita, a fim de se tornar mais forte e proteger sua aldeia. Como resultado, Tatsumi começa a treinar, não só para se tornar um lutador melhor, mas assim como assassino frio. Em sua luta contra o Império, Noite Raid começa antagonizar uma organização conhecida como The Jaegars liderados por Edese, o lutador mais poderoso do Império."
    },
    {
      "id": 52,
      "nome": "Darling In The FranXX Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/darling-in-the-franxx-capa.jpg",
      "urlRota": "/ditf",
      "sinopse": "Eles sonham um dia voar pelo céu sem fim, mesmo cientes do quão imenso é o céu além da vidraça que bloqueia seu voo. Futuro distante: a humanidade se estabeleceu na cidade-fortaleza de Plantation, erguida sobre os destroços da guerra, e a civilização floresceu. Nessa cidade, há o Mistilteinn, um quartel de pilotos também conhecido como Gaiola. É lá que as crianças vivem... Alheios ao mundo de fora e da vastidão dos céus. Sua única missão em vida é lutar. Seus inimigos são os Kyoryu, gigantescos organismos misteriosos. As crianças operam robôs chamados FRANXX para enfrentar esses inimigos desconhecidos, crentes de que esse é seu objetivo de vida. Dentre eles, um garoto era considerado um prodígio: Hiro, serial 016. Contudo, agora ele é considerado uma falha, alguém desnecessário. Aqueles incapazes de pilotar FRANXX basicamente não existem. Um dia, uma misteriosa garota chamada 02 aparece para Hiro. De seu rosto, crescem dois curiosos chifres. 'Eu te encontrei, meu Querido.'"
    },
    {
      "id": 53,
      "nome": "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-capa.jpg",
      "urlRota": "/snn",
      "sinopse": "A história acompanha Red, um aventureiro que é expulso da grupo de heróis após ser apontado como um atraso para os demais guerreiros, já que, mesmo tendo sido escolhido, ele não tem grandes habilidades mágicas ou físicas. Sendo jogado fora pelos seus companheiros, Red se afasta das batalhas e decide viver uma vida pacifica em uma cidade distante, mas as constantes cobranças do seu passado, assim como o aparecimento de uma bela garota chamada Rit, e de seus antigos membros de equipe, faz com que não seja tão simples assim viver do jeito que Red espera."
    },
    {
      "id": 54,
      "nome": "Spy x Family Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/spy-x-family-capa.jpg",
      "urlRota": "/sxf",
      "sinopse": "Para o agente conhecido como 'Crepúsculo', nenhuma ordem é muito alta se for pelo bem da paz. Operando como espião mestre de Westalis, Twilight trabalha incansavelmente para evitar que extremistas iniciem uma guerra com o país vizinho Ostania. Para sua última missão, ele deve investigar o político ostaniano Donovan Desmond infiltrando-se na escola de seu filho: a prestigiosa Eden Academy. Assim, o agente enfrenta a tarefa mais difícil de sua carreira: casar, ter um filho e brincar de família. Tw ilight, ou 'Loid Forger', rapidamente adota a órfã despretensiosa Anya para fazer o papel de uma filha de seis anos e futura aluna da Eden Academy. Como esposa, ele se depara com Yor Briar, uma trabalhadora de escritório distraída que precisa de um parceiro fingido para impressionar seus amigos. No entanto, Loid não é o único com uma natureza oculta. Yor brilha como a assassina letal 'Princesa Thorn'. Para ela, casar com Loid cria a cobertura perfeita. Enquanto isso, Anya não é a garota comum que parece ser; ela é uma esper, o produto de experimentos secretos que lhe permitem ler mentes. Embora ela descubra suas verdadeiras identidades, Anya está emocionada que seus novos pais sejam agentes secretos legais! Ela nunca diria a eles, é claro. Isso arruinaria a diversão. Sob o disfarce de 'The Forgers', o espião, o assassino e o esper devem agir como uma família enquanto realizam suas próprias agendas. Embora esses mentirosos e desajustados estejam apenas desempenhando papéis, eles logo descobrem que a família é muito mais do que relações de sangue."
    },
    {
      "id": 55,
      "nome": "Majo no Tabitabi Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/majo-no-tabitabi-capa.jpg",
      "urlRota": "/mnt",
      "sinopse": "Era uma vez uma bruxa chamada Elaina, que partiu em uma jornada pelo mundo. Ao longo da jornada, ela conhecia todos os tipos de pessoas; de um país cheio de bruxas, a um gigante apaixonado por seus próprios músculos. E à cada encontro, Elaina se tornaria uma pequena parte da história deles, e seu próprio mundo se tornava um pouco maior."
    },
    {
      "id": 56,
      "nome": "Ijiranaide, Nagatoro-san Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/ijiranaide-nagatoro-san-capa.jpg",
      "urlRota": "/ins",
      "sinopse": "A estudante Hayase Nagatoro adora passar seu tempo livre fazendo uma coisa, que é intimidar seu Senpai! Depois que Nagatoro e seus amigos tropeçam nos desenhos da aspirante a artista, eles se divertem em intimidar impiedosamente o tímido Senpai. Nagatoro resolve continuar seu jogo cruel e o visita diariamente para que ela possa forçar Senpai a fazer o que lhe interessar no momento, especialmente se isso o deixar desconfortável. Ligeiramente excitado e com um pouco de medo de Nagatoro, Senpai est á constantemente amarrado em suas travessuras enquanto seus interesses, hobbies, aparência e até personalidade são usados contra ele enquanto ela se diverte às custas dele. Com o passar do tempo, Senpai percebe que não gosta da presença de Nagatoro, e os dois desenvolvem uma amizade incômoda enquanto um pacientemente aguenta as travessuras do outro."
    },
    {
      "id": 57,
      "nome": "Kimi no Na Wa Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/kimi-no-na-wa-capa.jpg",
      "urlRota": "/knnw",
      "sinopse": "Mitsuha Miyamizu é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana, é um jovem que trabalha em um restaurante italiano em Tóquio, e deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos."
    },
    {
      "id": 58,
      "nome": "Date A Live",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/date-a-live-capa.jpg",
      "urlRota": "/dal",
      "sinopse": "Itsuka Shido é um garoto do ensino médio. No último dia das férias de primavera, uma explosão destrói a cidade e uma menina de armadura aparece na frente dele. Shido irmã-de-lei, Kotori, diz- lhe que a menina é chamada de “Criatura desastroso especial designado: Spirit”, o que causa um terremoto de tempo-espaço. Kotori revelou que ela é o comandante da Ratatosk organização anti- espírito e ordena-lhe para ir a um encontro com a garota espírito. Kotori diz: “Eu não lhe peço para vencer o espírito . Deixa-la cair no amor com você e salvar o mundo.” Concluído"
    },
    {
      "id": 59,
      "nome": "No Game no Life Dublado",
      "urlCapa": "https://purchaseway-animes.kevinsouza456.repl.co/assets/resources/img/no-game-no-life-capa.jpg",
      "urlRota": "/ngnl",
      "sinopse": "A história de 'No Game, No Life' se passa ao redor de Sora e Shiro, irmãos cuja a reputação como NEETs brilhantes, gamers reclusos, espalhou várias lendas urbanas pela internet, Esses dois gamers até mesmo consideram o mundo real como um 'jogo com péssimos gráficos'. Certo dia, eles são evocados por um garoto chamado 'Deus' para um mundo alternativo. Lá, Deus proibiu a guerra e declarou este um mundo onde 'tudo é decidido com jogos', até fronteiras de países. A humanidade foi conduzida de volta à única cidade restante pelas outras raças. Sora e Shiro, os irmãos inúteis se tornarão os 'Salvadores da Humanidade' neste mundo alternativo? 'Que os jogos comecem!'"
    }
]

const containerAnimes = $('.lista-animes');

database.forEach(anime => {
  containerAnimes.append(`
      <article>
          <a href="${anime.urlRota}">
              <img src="${anime.urlCapa}">
              <h1>${anime.nome}</h1>
          </a>
      </article>
  `)
})
  
console.log(containerAnimes)