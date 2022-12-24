const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const video = urlParams.get('video')
console.log(video)

document.getElementById('iframe').src = `https://www.youtube.com/embed/${video}`

document.getElementById('back').onclick = () => {
    window.open('index.html', '_blank')
}