import axios from 'axios';


const pokeButton = document.getElementById('get-pokemon'); 

pokeButton.addEventListener('click', async () => {
    const amount = document.getElementById('num-pokemon').value
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    const response = await axios.get(baseUrl) 

        const pokemonList = response.data.results;
        let pokemonNameUl = document.getElementById('pokemon-list')
        
        for(let i = 0; i < pokemonList.length; i++){
            let newListItem = document.createElement('li')
            newListItem.innerHTML = pokemonList[i].name
            pokemonNameUl.appendChild(newListItem)

        
        }

})