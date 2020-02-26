// put shit here

const getInfo = (url) => {
    const xhr = new XMLHttpRequest();
    //<pending>
    // instatiate the promise
    const myRequest = new Promise((resolve, reject) => {
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {  // 200 === resolved
                const data = JSON.parse(xhr.responseText);
                resolve(data)
            }
            else {  // rejected
                alert('Request failed.  Returned status of ' + xhr.status);
                reject()
            }
        };
        xhr.send();
    });
    return myRequest;
} // get()

// const link = `https://api.themoviedb.org/3/movie/550?api_key=aaf61b600bd7e26a96f6e5cf0dc95050&callback=test`;

getInfo(link)
   
