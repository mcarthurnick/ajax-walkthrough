import axios from 'axios';


const pokeButton = document.getElementById('get-pokemon'); 

pokeButton.addEventListener('click', () => {
    const amount = document.getElementById('num-pokemon').value
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    axios.get(`${baseUrl}?limit=${amount}`)
    .then((response) => {
        const pokemonList = response.data.results;
        let pokemonNameUl = document.getElementById('pokemon-list')
        
        for(let i = 0; i < pokemonList.length; i++){
            let newListItem = document.createElement('li')
            newListItem.innerHTML = pokemonList[i].name
            pokemonNameUl.appendChild(newListItem)

        
        }
    })
})