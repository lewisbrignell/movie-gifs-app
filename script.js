
document.addEventListener("DOMContentLoaded", () => {
    
    // connect to moviedb api with axios
    axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/550?api_key=${config.moviedbAPIKey}&callback=test`,
        responseType: 'json',
    })
    .then( (res) => {
        console.log('success: ', res);
    })
    .catch( (res) => {
        console.log('oops: ', res);
        alert('Sorry! There was an error :(')
    });

    // connect to giphy api
});
