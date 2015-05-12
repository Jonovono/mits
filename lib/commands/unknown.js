var mits = require('../main');
var util = require('util');

module.exports = function(args) {

  mits.emit('error', util.format(
    "'%s' is not a valid command.",
    args[0]
  ));
};