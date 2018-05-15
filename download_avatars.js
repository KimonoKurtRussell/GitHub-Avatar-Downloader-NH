var request = require('request');

var password = require('./secrets')

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + password.GITHUB_TOKEN
    }
  }


    request(options, function(err, res, body) {
      if (!err) {
        var info = JSON.parse(body)
           info.forEach(function (profile) {
           console.log(profile.avatar_url)
          })
          //console.log(info)
          cb(err, body);
        }
    });
}

 getRepoContributors("jquery", "jquery", function(err, result) {
   //console.log("Errors:", err);
  // console.log("Result:", result);
 });






