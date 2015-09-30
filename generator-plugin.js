/*
 * lodash-doc pub-generator plugin
 *
 * mostly copied from https://github.com/jdalton/docdown
 * copyright 2011-2015 John-David Dalton <http://allyoucanleet.com/>
*/

var Prism = require('./js/prism.js');

module.exports = function(generator) {
  var opts = generator.opts;

  // api matches https://github.com/chjj/marked#options-1
  opts.highlight = function(code, lang) {
    grammar = Prism.languages[lang];
    return grammar ? Prism.highlight(code, grammar, lang) : code;
  }
}
