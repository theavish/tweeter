app.factory('tweetF', ['server', '$http', function(server, $http) {


  var getTweets = function(name, count) {

    var parameters = {
      name: name || 'BoredElonMusk',
      count: count || 25
    };

    return $http.post(server + '/getTweets', parameters)
      .then(function success(response) {
        return response.data;
      });
  };


  return {
    getTweets: getTweets
  };

}]);
