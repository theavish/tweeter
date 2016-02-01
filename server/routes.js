var router = require('express').Router();
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config');
var jsonParser = bodyParser.json();


router.post('/getTweets', jsonParser, function(req, res) {
  var name = req.body.name;
  var count = req.body.count;
  console.log('retrieving the last ' + count + ' tweets from ' + name)
  config.twitter.getUserTimeline({
    screen_name: name,
    count: count
  }, function(error, response, body) {
    console.log('*** getUserTimeline Error');
    res.send(error);
  }, function(data) {
    console.log('*** getUserTimeline Success');
    res.send(data);
  });
});

module.exports = router;
