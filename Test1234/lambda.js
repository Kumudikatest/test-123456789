let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);

exports.handler = function (event, context, callback) {
    //comment test
    twitter.getTweet({
        "tweetID": "123456789",
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
    }).catch(err => {
        console.log(err);
    });

    callback(null, { "message": "Successfully executed" });
}