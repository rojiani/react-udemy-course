// Serves as our point of contact with IMGUR API
var Fetch   = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey  = '711682df3091ac8';

// fetch Polyfill
module.exports = {
  get: function (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function (response) {
      return response.json();
    })
  }
};
