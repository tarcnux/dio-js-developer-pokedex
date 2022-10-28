console.log("main.js importado corretamente");

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map( (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="number"># ${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}"
                alt="${pokemon.name}">
        </div>
    </li> <!--pokemon-->
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi
    .getPokemons()
    .then((pokemons = []) => {
        pokemonList.innerHTML = pokemons.map(convertPokemonToHtml).join('')
    })


