var request = require('request');
var fs = require('fs')
var password = require('./secrets')
var repoOwner = process.argv[2];
var repoName = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(process1, process2, cb) {
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
  request(url, filepath)
     .on('error', function (err) {
       throw err;
       console.log(error)
      })
     .on('response', function (response) {
       console.log('Response Status Code: ', response.statusCode, 'Response Message', response.statusMessage, 'Content Type', response.headers['content-type']);
      })
     .pipe(fs.createWriteStream('./avatars/kvirani.png'))
     .on('finish', function () {
       console.log('Avatar Download Completed.');
      })

 }


getRepoContributors("jquery", "jquery", function(err, result) {
   console.log("Errors:", err);

 });

if (repoOwner == null || repoName == null) {
  console.log('Repository Name and/or Repository Owner are not valid, try again.')
} else {
  getRepoContributors(repoOwner, repoOwner, function (err, res) {
    console.log('Avatars Downloded')
       })
}






