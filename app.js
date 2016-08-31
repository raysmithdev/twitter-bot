var secret = require('./secret');
var Twit = require('twit');

/* Create a secret.json file in the root directory with your Twitter App's credentials */
var Bot = new Twit({
	consumer_key: secret.consumer_key,
	consumer_secret: secret.consumer_secret,
	access_token: secret.access_token_key,
	access_token_secret: secret.access_token_secret
});

function Retweet() {

	var query = {
		q: "#react",
		result_type: "recent"
	}

	Bot.get('search/tweets', query, BotGotLatestTweet);

	function BotGotLatestTweet (error, data, response) {
		if (error) {
			console.log('Bot could not find latest tweet, : ' + error);
		}
		else {
			var id = {
				id : data.statuses[0].id_str
			}

			Bot.post('statuses/retweet/:id', id, BotRetweeted);

			function BotRetweeted(error, response) {
				if (error) {
					console.log('Bot could not retweet, : ' + error);
				}
				else {
					console.log('Bot retweeted : ' + id.id);
				}
			}
		}
	}
}

Retweet();
