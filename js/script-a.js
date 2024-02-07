dadosRecebidos = location.search.replace(/[^0-9]/g, '')

async function request() {
    const res = await fetch("../data/imprensus.json")
    const data = await res.json();
    console.log(data[dadosRecebidos])
}

request()