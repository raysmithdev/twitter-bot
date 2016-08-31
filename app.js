var TwitterPackage = require('twitter');
var secret = require('./secret');

var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'Testing a bot!'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});