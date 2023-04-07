for (let i = 1; i < 152; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => response.json())
        .then(data => {
            addSprites(data, i)
        }, 500)
        .catch(err => console.error(err));
}

function addSprites(data, index) {
    const cardbox = document.createElement('div');
    cardbox.className = 'cardbox';
    cardbox.id = 'cardbox-' + index

    const idPokemon = document.createElement('p');
    idPokemon.className = 'id-pokemon';
    idPokemon.id = 'id-' + index;
    idPokemon.textContent = '#' + data.id;
    cardbox.appendChild(idPokemon)

    const pokemonName = document.createElement('p');
    pokemonName.className = 'name-pokemon';
    pokemonName.id = 'pokemon-' + data.name
    pokemonName.textContent = data.name
    cardbox.appendChild(pokemonName)

    const divType = document.createElement('div');
    divType.className = 'div-type'

    for (let i = 0; i < data.types.length; i++) {
        const typePokemon = document.createElement('span');
        typePokemon.className = 'type-pokemon';
        typePokemon.id = idPokemon.id + '-' + data.types[i].type.name;
        typePokemon.textContent = data.types[i].type.name;
        divType.appendChild(typePokemon);
    }
    cardbox.appendChild(divType);

    const imagePokemon = document.createElement('img')
    imagePokemon.className = 'image-pokemon';
    imagePokemon.id = 'id-' + index;
    imagePokemon.src = data.sprites.other.home.front_default;
    cardbox.appendChild(imagePokemon)

    const cardboxContainer = document.querySelector('.cardbox-container');
    switchColor(cardbox, data.types[0].type.name)
    cardboxContainer.appendChild(cardbox)
}

function switchColor(cardbox, data) {
    switch (data) {
        case 'grass':
            cardbox.style.backgroundColor = 'var(--grass-color)';
            break;
        case 'water':
            cardbox.style.backgroundColor = 'var(--water-color)';
            break;
        case 'fire':
            cardbox.style.backgroundColor = 'var(--fire-color)';
            break;
        case 'electric':
            cardbox.style.backgroundColor = 'var(--electric-color)';
            break;
        case 'bug':
            cardbox.style.backgroundColor = 'var(--bug-color)';
            break;
        case 'poison':
            cardbox.style.backgroundColor = 'var(--poison-color)';
            break;
        case 'normal':
            cardbox.style.backgroundColor = 'var(--normal-color)';
            break;
        case 'ground':
            cardbox.style.backgroundColor = 'var(--ground-color)';
            break;
        case 'fairy':
            cardbox.style.backgroundColor = 'var(--fairy-color)';
            break;
        case 'ice':
            cardbox.style.backgroundColor = 'var(--ice-color)';
            break;
        case 'ghost':
            cardbox.style.backgroundColor = 'var(--ghost-color)';
            break;
        case 'fighting':
            cardbox.style.backgroundColor = 'var(--fighting-color)';
            break;
        case 'psychic':
            cardbox.style.backgroundColor = 'var(--psychic-color)';
            break;
        case 'dragon':
            cardbox.style.backgroundColor = 'var(--dragon-color)';
            break;
        case 'flying':
            cardbox.style.backgroundColor = 'var(--flying-color)';
            break;
        case 'rock':
            cardbox.style.backgroundColor = 'var(--rock-color)';
            break;
        case 'dark':
            cardbox.style.backgroundColor = 'var(--dark-color)';
            break;
        case 'steel':
            cardbox.style.backgroundColor = 'var(--steel-color)';
            break;
        default:
            cardbox.style.backgroundColor = 'var(--background-color)';
    }
}