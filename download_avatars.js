var request = require('request');
var fs = require('fs')
var password = require('./secrets')

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + password.GITHUB_TOKEN
    }
  }


    request(options, function(err, res, body) {
      if (!err) {
        cb(err, body);
        var info = JSON.parse(body)
           info.forEach(function (profile) {

          })


        }
    });
}

function downloadImageByURL(url, filePath) {
  request("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")
     .on('error', function (err) {
       throw err;
       console.log(error)
     })
     .on('response', function (response) {
       console.log('Response Status Code: ', response.statusCode, 'Response Message', response.statusMessage, 'Content Type', response.headers['content-type']);
      })
     .pipe(fs.createWriteStream("./avatars/kvirani.png"))
     .on('finish', function () {
       console.log('Avatar Download Completed.');
     })

 }


getRepoContributors("jquery", "jquery", function(err, result) {
   console.log("Errors:", err);

 });

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")




