const dadosRecebidos = location.search.replace(/[?]/g, '')
const titleh1 = document.querySelector('.cab__title--h1');
const principalh1 = document.querySelector('.principal__h1');
const principala = document.querySelector('.principal__sect--a');
const principalb = document.querySelector('.principal__sect--b');

const data = {
    "1": {
       "name": "Julio Cesar", 
       "link": "https://discord.gg/5hFXSZwVzs" 
    },
    "2": {
        "name": "Lara", 
        "link": "https://discord.gg/bgyEXh5qpZ" 
     },
     "3": {
        "name": "Gustavo", 
        "link": "https://discord.com/invite/ev7ZmTMDkT" 
     },
     "4": {
        "name": "Marco", 
        "link": "https://discord.com/invite/uyKWRRqNph" 
     },
     "5": {
        "name": "Gustavo B.", 
        "link": "https://discord.com/invite/k4NxHrD6db" 
     },
     "6": {
        "name": "Nicolas", 
        "link": "https://witi.eagleapp.com.br" 
     },
     "7": {
        "name": "Victor", 
        "link": "https://discord.com/invite/PzdcJCqZ" 
     },
}

function titulo(dados) {
    document.title = `Convite de ${dados} - WITI - Who Is The Impostor`;
    titleh1.innerHTML = `Convite de ${dados} - WITI - Who Is The Impostor`;
    principalh1.innerHTML = `Você foi convidado por ${dados}, para participar do servidor do WITI - Who Is The Impostor, um servidor de eventos de Among Us Brasileiro, que está sendo realizado. Se você quiser apoiar o projeto do WITI basta entrar no servidor e participar dos nossos eventos realizados.`;
}

function links(dados) {
    principala.href = dados;
    principalb.href = dados;
}

async function request() {
    dadosSelecionados = (data[dadosRecebidos]);
    titulo(dadosSelecionados.name);
    links(dadosSelecionados.link);
}

request();