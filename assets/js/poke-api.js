console.log("poke-api.js importado corretamente");

const pokeApi = {}

pokeApi.getPokemons = function(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
            .then(response =>  response.json())
            .then(jsonBody => jsonBody.results)
            .catch(error => console.error(error))
}