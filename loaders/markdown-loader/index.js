/* @flow weak */
var frontMatter = require('front-matter');
var markdownIt = require('markdown-it');
var hljs = require('highlight.js');
var objectAssign = require('object-assign');

const highlight = function (str, lang) {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (_error) {
    console.error(_error);
  }
  return '';
};

var md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: highlight,
  replaceLink: function (link, env) {
    if (process.env['PREFIXLINKS'] === '1' && link.indexOf('/docs') === 0) {
      return "/pythonVSCodeDocs" + link;
    }
    else {      
      // Cache busting
      if (link.indexOf('') === 0 && link.lastIndexOf('.gif') + 4 === link.length){
        return link + '?_=' + new Date().getTime().toString();
      }
      return link;
    }
  }
}).use(require('markdown-it-replace-link'));

module.exports = function (content) {
  this.cacheable()
  var meta = frontMatter(content);
  var body = md.render(meta.body);
  var result = objectAssign({}, meta.attributes, {
    body: body
  });
  this.value = result;
  return 'module.exports = ' + JSON.stringify(result);
}