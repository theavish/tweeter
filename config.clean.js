var Twitter = require('twitter-js-client').Twitter;

var config = {
  "consumerKey": "<HIDDEN>",
  "consumerSecret": "<HIDDEN>",
  "accessToken": "<HIDDEN>",
  "accessTokenSecret": "<HIDDEN>",
  "callBackUrl": "<HIDDEN>"
};

var twitter = new Twitter(config);


module.exports = {

  Twitter: Twitter,
  config: config,
  twitter: new Twitter(config)

};
