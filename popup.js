// Initialize button with user's preferred color
let changeColor = document.getElementById('colorDiv');

// Gif Container
let getGifContainer = document.getElementById('gifContainer');

let button = document.querySelector('button');

button.addEventListener('click', () => {
  // Giphy URL
  let giphyAPI = '4lALB2Uo7bfxD6r1IPBZBqejL4G4mDIy';
  let search = document.getElementById('searchInput').value;
  search = search.replace(/ /g, '+');
  let giphyURL =
    'http://api.giphy.com/v1/gifs/search?q=' +
    search +
    '&api_key=' +
    giphyAPI +
    '&limit=5';
  // starts the process of fetching a resource from the network

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

function generateGifs(gifs) {
  for (let i = 0; i <= gifs.data.length; i++) {
    let createGif = document.createElement('img');
    getGifContainer.appendChild(createGif);
    createGif.setAttribute('id', `${i}`);
    createGif.setAttribute('class', 'newGif');
    createGif.setAttribute('src', `${gifs.data[i].images.fixed_height.url}`);
  }

  console.log("HELLO2");
}

// make AJAX call here....
// starts the process of fetching a resource from the network
// fetch(giphyURL)
//   .then((response) => {
//     // submitting request to be formatted in json
//     return response.json(); // once promise is resolved, object "data" gets returned out to the next .then()
//   })
//   .then((data) => {
//     // iterate over the array of objects
//     // for (let i = 0; i < data.length; i++) {
//     //   newChatRow(data[i].created_by, data[i].message, data[i].created_at);
//     // }
//     console.log(data);
//     generateGifs(data);
//   });