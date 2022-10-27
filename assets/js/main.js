console.log("main.js importado corretamente");

let offset = 0;
let limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

fetch(url)
    .then(function (response) {
        console.log(response);
    });
const x = 10 + 10;

console.log(x);