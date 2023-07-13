import mountainSongs from './mountain.json' assert { type: "json" };

//NOTE: It may help to view/transform the JSON through a formatter

//1. Log an array of the keys of the main object in the JSON file
const getKeys = () => {
    const keys = [];
    for(let key in mountainSongs){
        keys.push(key);
    }
    console.log('keys', keys)
}

//2. Get the title of the first track in the data
    const title = mountainSongs.results[0].trackName;
    console.log(title);

//3. Get all the artists present in the data
    const getArtists = () => {
        mountainSongs.results.forEach((artist) => {
            return artist.artistName
        })
    }

    //getArtists();
    getKeys();