const dadosRecebidos = location.search.replace(/[?]/g, '')
const titleh1 = document.querySelector('.cab__title--h1');
const principalh1 = document.querySelector('.principal__h1');
const principala = document.querySelector('.principal__sect--a');
const principalb = document.querySelector('.principal__sect--b');

const data = {
    "1": {
       "name": "Julio Cesar", 
       "link": "https://witi.eagleapp.com.br" 
    },
    "2": {
        "name": "Lara", 
        "link": "https://witi.eagleapp.com.br" 
     },
     "3": {
        "name": "Gustavo", 
        "link": "https://witi.eagleapp.com.br" 
     },
     "4": {
        "name": "Marco", 
        "link": "https://witi.eagleapp.com.br" 
     },
     "5": {
        "name": "Gustavo B.", 
        "link": "https://witi.eagleapp.com.br" 
     },
     "6": {
        "name": "Nicolas", 
        "link": "https://witi.eagleapp.com.br" 
     },
     "7": {
        "name": "Victor", 
        "link": "https://witi.eagleapp.com.br" 
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