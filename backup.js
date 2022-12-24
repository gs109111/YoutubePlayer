// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': localStorage.APIKEY,
//         'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//     }
// };

// fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${channel}&upload_date=week&type=video`, options)
//     .then(response => response.json())
//     .then(response => {
//         // console.log(response)
//         let data = response.data;
//         console.log(data)
//         data.find(function(item, i) {
//             let dataLength = i;
//             let thumbnail = data[dataLength]['thumbnail'][0]['url']
//             let title = data[dataLength]['title']
//             let uploadDate = data[dataLength]['publishedText']
//             let videoId = data[dataLength]['videoId']
//             let channelName = data[dataLength]['channelTitle']


//             document.getElementById('videoList').insertAdjacentHTML('afterbegin', `
//                 <a href="video.html?video=${videoId}"><div class="yt-video-container" id="videoContainer">
//                 <img id="thumbnail" src="${thumbnail}">
//                 <b><p id="title">${title}</p></b>
//                 <p id="uploadDate">Uploaded: ${uploadDate}</p>
//                 <p id="channelName">${channelName}</p>
//             </div></a>

//         `)
//         })

//         // });
//     })



// fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${channel2}&type=video&sort_by=relevance`, options)
//     .then(response => response.json())
//     .then(response => {
//         // console.log(response)
//         let data = response.data;
//         console.log(data)
//         data.find(function(item, i) {
//             setTimeout(() => {
//                 let length = document.getElementsByClassName('yt-video-container').length;
//                 document.getElementById('contentLength').innerHTML = `Loaded ${length+1} Videos`;
//             }, 400)
//             let dataLength = i;
//             let thumbnail = data[dataLength]['thumbnail'][0]['url']
//             let title = data[dataLength]['title']
//             let uploadDate = data[dataLength]['publishedText']
//             let videoId = data[dataLength]['videoId']
//             let channelName = data[dataLength]['channelTitle']


//             document.getElementById('videoList').insertAdjacentHTML('afterbegin', `
//                 <a href="video.html?video=${videoId}"><div class="yt-video-container" id="videoContainer">
//                 <img id="thumbnail" src="${thumbnail}">
//                 <b><p id="title">${title}</p></b>
//                 <p id="uploadDate">Uploaded: ${uploadDate}</p>
//                 <p id="channelName">${channelName}</p>
//             </div></a>

//         `)
//         })


//         // });
//     })









// fetch(url)
//     .then(response => response.json())
//     .then(data => {
// console.log(data.items)
// let snippet = data.items[0]['snippet']
// let title = snippet.title;
// videoPublished = new Date(snippet.publishedAt);
// formattedDate = (videoPublished.getMonth() + 1) + '/' + videoPublished.getDate() + '/' + videoPublished.getFullYear();
// let uploadDate = formattedDate;
// let thumbnail = snippet['thumbnails']['high']['url']




// document.querySelector(".iframeClass").src = `
//     https: //www.youtube.com/embed/${data.items[0].id.videoId}`;