document.getElementById('submitApiKey').onclick = () => {
    localStorage.APIKEY = document.getElementById('api').value;
    window.location.reload();
};

document.getElementById('setSearchQuery1').onclick = () => {
    localStorage.SearchQuery = document.getElementById('SearchQuery1').value.replace(' ', '+');;
    window.location.reload();
};

document.getElementById('api').value = localStorage.APIKEY;
document.getElementById('SearchQuery1').value = localStorage.SearchQuery;

document.getElementById('setSearchQuery2').onclick = () => {
    localStorage.SearchQuery2 = document.getElementById('SearchQuery2').value.replace(' ', '+');
    window.location.reload();
};
document.getElementById('SearchQuery2').value = localStorage.SearchQuery2;

let channel = localStorage.SearchQuery;
let channel2 = localStorage.SearchQuery2;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': localStorage.APIKEY,
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
    }
};

fetch(`https://simple-youtube-search.p.rapidapi.com/search?query=${channel}&safesearch=false`, options)
    .then(res => res.json())
    .then(res => {
        data = res.results
        console.log(data)
        data.find(function(item, i) {
            let dataLength = i;
            let thumbnail = data[dataLength]['thumbnail']['url']
            console.log(thumbnail)
            let title = data[dataLength]['title']
            let uploadDate = data[dataLength]['uploadedAt']
            let videoId = data[dataLength]['id']
            let channelName = data[dataLength]['channel']['name']


            document.getElementById('videoList').insertAdjacentHTML('afterbegin', `
                        <a href="video.html?video=${videoId}"><div class="yt-video-container" id="videoContainer">
                        <img id="thumbnail" src="${thumbnail}">
                        <b><p id="title">${title}</p></b>
                        <p id="uploadDate">Uploaded: ${uploadDate}</p>
                        <p id="channelName">${channelName}</p>
                    </div></a>

                `)
        })
    })


fetch(`https://simple-youtube-search.p.rapidapi.com/search?query=${channel2}&safesearch=false`, options)
    .then(res => res.json())
    .then(res => {
        data = res.results
        console.log(data)
        data.find(function(item, i) {
            setTimeout(() => {
                let length = document.getElementsByClassName('yt-video-container').length;
                document.getElementById('contentLength').innerHTML = `Loaded ${length+1} Videos`;
            }, 400)
            let dataLength = i;
            let thumbnail = data[dataLength]['thumbnail']['url']
            console.log(thumbnail)
            let title = data[dataLength]['title']
            let uploadDate = data[dataLength]['uploadedAt']
            let videoId = data[dataLength]['id']
            let channelName = data[dataLength]['channel']['name']


            document.getElementById('videoList').insertAdjacentHTML('afterbegin',   `
                    <a href="video.html?video=${videoId}"><div class="yt-video-container" id="videoContainer">
                    <img id="thumbnail" src="${thumbnail}">
                    <b><p id="title">${title}</p></b>
                    <p id="uploadDate">Uploaded: ${uploadDate}</p>
                    <p id="channelName">${channelName}</p>
                </div></a>

            `)
        })
    })
