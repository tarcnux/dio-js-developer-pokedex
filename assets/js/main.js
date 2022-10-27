console.log("main.js importado corretamente");

let offset = 0;
let limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

fetch(url)
    .then(response =>  response.json())
    .then(jsonBody => console.log(jsonBody))
    .catch(error  =>  console.log(error))
    .finally(() => console.log('Requisição concluída.'))

const x = 10 + 10;

console.log(x);