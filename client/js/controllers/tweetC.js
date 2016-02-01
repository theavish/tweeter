app.controller('tweetC', ['$scope', 'tweetF', function($scope, tweetF) {
  var self = this;
  self.tweets = [];
  self.icons = {
    retweet: 'https://g.twimg.com/dev/documentation/image/retweet-action.png',
    favorite: 'https://g.twimg.com/dev/documentation/image/like-action.png'
  };


  self.getTweets = function(name, count) {
    console.log('retrieving the last ' + count + ' tweets from ' + name);
    tweetF.getTweets(name, count).then(function(data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var item = data[i];

        var tweet = {
          name: item.user.name,
          username: item.user.screen_name,
          pic: (item.user.profile_image_url).replace('_normal', ''),
          date: new Date(item.created_at).toLocaleDateString(),
          time: new Date(item.created_at).toLocaleTimeString().replace(/\:[0-9][0-9] /g, ' '),
          text: item.text,
          retweets: item.retweet_count,
          favorites: item.favorite_count
        };

        self.tweets.push(tweet);
      }
    });
  };
}]);
