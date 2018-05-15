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

  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  var data = JSON.parse(result);
    for (i = 0; i < data.length; i++) {

      if (!err) {
      downloadImageByURL(data[i].avatar_url, result)
       console.log(downloadImageByURL())
      }

    }
   console.log(data)
});

function downloadImageByURL(url, filePath) {
  request.get(url) {

  };

}








