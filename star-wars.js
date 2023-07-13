import axios from 'axios';


//get random numbr 1 - 6
const episodeNum = Math.ceil(Math.random() * 6)

axios.get(`https://swapi.dev/api/films/${episodeNum}/`)
    .then((response) => {
        document.getElementById('star-wars-movie').innerHTML = response.data.title
})
    .catch((error) => {
    console.log('error', error)
})
