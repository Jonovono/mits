var mits = require('../main');
var fs = require('fs');
var path = require('path')
var readline = require('readline');
var log = require("winston");

log.cli();

module.exports = function(args) {
  var basepath = path.join(__dirname, '..', '..', 'doc');
  var filepath;
  var data;

  // full doc file path
  filepath = path.join(basepath, 'help.txt');

  fs.readFileSync(filepath).toString().split('\n').forEach(function(line) {
    log.help(line);
  });
}