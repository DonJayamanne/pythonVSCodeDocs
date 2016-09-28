var ghpages = require('gh-pages');
var path = require('path');

console.log('Publishing to github repo...');

ghpages.publish(path.join(__dirname, 'public'), {
  branch: 'help',
  repo: 'https://github.com/DonJayamanne/pythonVSCodeDocs.git'
}, function () {
  console.log('Published local help to remote github repo');
});