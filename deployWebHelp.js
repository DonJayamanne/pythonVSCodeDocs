var ghpages = require('gh-pages');
var path = require('path');

console.log('Publishing to gh-pages...');

ghpages.publish(path.join(__dirname, 'public'), function () {
  console.log('Published web help to gh-pages');
});