async function request() {
    const res = await fetch("../data/imprensus.json")
    const data = await res.json();
    console.log(data)
}

request()