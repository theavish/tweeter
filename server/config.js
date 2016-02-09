var Twitter = require('twitter-js-client').Twitter;

var config = {
  "consumerKey": "7529Ac29e82UgheWROgPid7Ln",
  "consumerSecret": "idtw9JlGCrrHw8T2EICTL70OgMDHB01ddOWe2lSsGS0Giduih4",
  "accessToken": "241097887-5G5FGztLERrSz3NBLazvlmyc6dgGHQKDQmOWcR9W",
  "accessTokenSecret": "UPRuS598GT22bFkLu47vYjqMUbiKnFEHHsDyI5IcKfhsI",
  "callBackUrl": "https://tweeterjs.herokuapp.com/"
};

var twitter = new Twitter(config);


module.exports = {

  Twitter: Twitter,
  config: config,
  twitter: new Twitter(config)

};
