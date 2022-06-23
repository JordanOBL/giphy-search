// Initialize button with user's preferred color
let changeColor = document.getElementById('colorDiv');

chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// Gif Container
let getGifContainer = document.getElementById('gifContainer');

let giphyAPI = '4lALB2Uo7bfxD6r1IPBZBqejL4G4mDIy';
let search = document.getElementById('searchInput').value;
search = search.replace(/ /g, '+');
let giphyURL =
  'http://api.giphy.com/v1/gifs/search?q=' +
  search +
  '&api_key=' +
  giphyAPI +
  '&limit=5';

let button = document.querySelector('button');
button.addEventListener('click', () => {
  // make AJAX call here....
  // starts the process of fetching a resource from the network

  function generateGifs(gifs) {
    for (let i = 0; i <= gifs.data.length; i++) {
      let createGif = document.createElement('video');
      getGifContainer.appendChild(createGif);
      createGif.setAttribute('id', `${i}`);
      createGif.setAttribute('class', 'newGif');
      createGif.setAttribute('src', `${gifs.data[i].url}`);
    }
    console.log(getGifContainer);
  }

  fetch(giphyURL)
    .then((response) => {
      // submitting request to be formatted in json
      return response.json(); // once promise is resolved, object "data" gets returned out to the next .then()
    })
    .then((data) => {
      // iterate over the array of objects
      // for (let i = 0; i < data.length; i++) {
      //   newChatRow(data[i].created_by, data[i].message, data[i].created_at);
      // }
      generateGifs(data);
      console.log(data);
    });
});

