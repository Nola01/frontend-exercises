//const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`


const grass = document.querySelector('#grass');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const ground = document.querySelector('#ground');
const clean = document.querySelector('#clean');

const types = [grass, fire, water, ground];

types.forEach((type) => {
    type.addEventListener('click', () => {
        document.getElementById('list').innerHTML = ""
        let selectedType = type.id;
        console.log(selectedType);
        getAllPokemon(selectedType)
    })
})

clean.addEventListener('click', () => {
    document.getElementById('list').innerHTML = ""
    document.getElementById('search-input').value = ""
    firstList()
})

const firstList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`)
    .then(response => response.json())
    .then(data => {
        const pokemonList = data.results;
        pokemonList.forEach(pokemon => {
            createPokemonList(pokemon);
        })
        return pokemonList;
    });
}

firstList()

const getAllPokemon = (selectedType) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=100`)
    .then(response => response.json())
    .then(data => {
        const pokemonList = data.results;
        getPokemonDetails(pokemonList, selectedType)
        return pokemonList;
    })    
}   

const getPokemonDetails = async (pokemonList, selectedType) => {
    try {
        //console.log(pokemonList)
        const details = [];
        for (let i = 0; i < pokemonList.length; i++) {
            const response = await fetch(pokemonList[i].url);
            const data = await response.json()
            details.push(data)
        }
        //console.log(details)
        getPokemonByType(details, selectedType)
        return details;
    } catch (err) {
        alert(`Ha ocurrido un error: ${err}`);
    }
}

const getPokemonByType = (details, selectedType) => {
    //console.log(details)
    //console.log(selectedType)
    const listByType = [];
    details.forEach(pokemon => {
        if (pokemon.types[0].type.name == selectedType) {
            listByType.push(pokemon)
        }
    });
    //console.log(listByType)
    listByType.forEach((pokemon) => {
        createPokemonList(pokemon);
    });
    return listByType;
}

const createPokemonList = (pokemon) => {
    const list = document.getElementById('list')
    const p = document.createElement('p')
    p.id = 'pokemon'
    p.append(`${pokemon.name}`)
    list.append(p)
}

const debounce = (callback, wait) => {
    return (...args) => {
        setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

const filterPokemonByName = () => {
    document.addEventListener("keyup", debounce(e => {
        document.querySelectorAll("#pokemon").forEach(pokemon => {
            pokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?
            pokemon.classList.remove("filter")
            :
            pokemon.classList.add("filter")
        })
    }, 2000))

}

filterPokemonByName()
