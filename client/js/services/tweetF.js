app.factory('tweetF', ['$http', function($http) {


  var getTweets = function(name, count) {

    var parameters = {
      name: name || 'BoredElonMusk',
      count: count || 25
    };

    return $http.post('/getTweets', parameters)
      .then(function success(response) {
        return response.data;
      });
  };


  return {
    getTweets: getTweets
  };

}]);
