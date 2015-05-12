var mits = require('../main');

module.exports = function() {
  mits.emit('info', require('../../package.json').version);
};