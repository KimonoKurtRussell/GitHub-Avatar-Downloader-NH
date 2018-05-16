var request = require('request');
var fs = require('fs')
var password = require('./secrets')
var repoOwner = process.argv[2];
var repoName = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');

function downloadImageByURL(url, filePath) {
  request.get(url)
     .on('error', function (err) {
       console.log('Error occured', url)
       throw err;
     })
     .pipe(fs.createWriteStream(filePath));
 }


if (repoOwner == null || repoName == null) {
  console.log('Repository Name and/or Repository Owner are not valid, try again.')
}


function getRepoContributors(repoOwner, repoName, avatarRepeat) {
  var options = {
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + password.GITHUB_TOKEN
    }
  };
  request(options, function(err, res, body) {
      avatarRepeat(err, body, options);
  });
};


getRepoContributors(repoOwner, repoName, function(err, result, html) {
  var info = JSON.parse(result)
    if (Array.isArray(info) && !error) {
      info.forEach(function (repoContributor) {
        downloadImageByURL(repoContributor.avatar_url, './avatars/' + repoContributor.login);
      })
    } else {
        console.log('Cannot access' , html.url)
         return
       }
        console.log(info.length + 'Avatars Downloded')
});








