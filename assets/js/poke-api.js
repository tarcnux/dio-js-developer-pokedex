console.log("poke-api.js importado corretamente");

const pokeApi = {}

pokeApi.getPokemonDetail = pokemon => fetch(pokemon.url).then(response => response.json())


pokeApi.getPokemons = function(offset = 0, limit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    return fetch(url)
            .then(response =>  response.json())
            .then(jsonBody => jsonBody.results)
            .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
            .then(detailRequests => Promise.all(detailRequests))
            .then(pokemonsDetails => pokemonsDetails)
            .catch(error => console.error(error))
}