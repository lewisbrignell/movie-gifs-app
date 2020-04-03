
document.addEventListener("DOMContentLoaded", () => {
    
    // connect to moviedb api with axios
    axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/550?api_key=${config.moviedbAPIKey}&callback=test`,
        responseType: 'json',
    })
    .then( (res) => {
        console.log('success 1: ', res);
    })
    .catch( (res) => {
        console.log('oops 1: ', res);
        alert('Sorry! There was an error :(')
    });

    // connect to giphy api
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${config.giphyAPIKey}&q=&limit=25&offset=0&rating=G&lang=en`,
        responseType: 'json',
    })
    .then((res) => {
        console.log('success 2: ', res);
    })
    .catch((res) => {
        console.log('oops 2: ', res);
        alert('Sorry! There was an error :(')
    });
});

