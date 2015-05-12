var events = require('events');
var util = require('util');

var cnsl = require('./util/console');

function initialize() {
 this.on('error', function(msg) {
    cnsl.error(msg);
  });

  this.on('info', function(msg) {
    cnsl.info(msg);
  });
}

function mits() {
  initialize.call(this);
  events.EventEmitter.call(this);
}

util.inherits(mits, events.EventEmitter);

module.exports = mits;