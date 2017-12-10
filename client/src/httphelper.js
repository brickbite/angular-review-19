// Write your Angular here!
angular.module('myApp')
  .service('httpHelper', function($http) {

    this.send = (message, cb) => {
      $http({
        url: 'http://parse.la.hackreactor.com/chatterbox/classes/messages',
        method: 'POST',
        data: JSON.stringify(message),
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Application-Id': window.PARSE_APP_ID,
          'X-Parse-REST-API-Key': window.PARSE_API_KEY
        }
      })
        .then(response => console.log('POST succesful: ', response))
        .catch(error => console.log('Error in POST: ', error));
    };


    this.fetch = (option, cb) => {
      $http({
        url: 'http://parse.la.hackreactor.com/chatterbox/classes/messages',
        method: 'GET',
        params: { order: '-createdAt' },
        headers: {
          'X-Parse-Application-Id': window.PARSE_APP_ID,
          'X-Parse-REST-API-Key': window.PARSE_API_KEY
        }
      })
        .then(response => cb(response.data.results))
        // .then(response => console.log(response))
        .catch(error => console.log('Error in GET: ', error));
    };

  })