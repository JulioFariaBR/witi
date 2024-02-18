const dadosRecebidos = location.search.replace(/[^0-9]/g, '')
const titleh1 = document.querySelector('.cab__title--h1');
const principalh1 = document.querySelector('.principal__h1');
const principala = document.querySelector('.principal__sect--a');


function titulo(dados) {
    document.title = `Convite de ${dados} - WITI - Who Is The Impostor`;
    titleh1.innerHTML = `Convite de ${dados} - WITI - Who Is The Impostor`;
    principalh1.innerHTML = `Você foi convidado por ${dados}, para participar do servidor do WITI - Who Is The Impostor, um servidor de eventos de Among Us Brasileiro, que está sendo realizado. Se você quiser apoiar o projeto do WITI basta entrar no servidor e participar dos nossos eventos realizados.`;
}

function links(dados) {
    principala.href = dados;
}

async function request() {
    const res = await fetch("../data/imprensus.json");
    const data = await res.json();
    dadosSelecionados = (data[dadosRecebidos]);
    titulo(dadosSelecionados.name);
    links(dadosSelecionados.link);
}

request();