var events = require('events');
var util = require('util');
var updateNotifier = require('./util/notifier');

var cnsl = require('./util/console');

function initialize() {
 this.on('error', function(msg) {
    cnsl.error(msg);
  });

  this.on('info', function(msg) {
    cnsl.info(msg);
  });

  this.on('checkUpdate', function() {
    updateNotifier();
  });

  this.on('sleep', function() {
    console.log('slep');
  });
}

function mits() {
  initialize.call(this);
  events.EventEmitter.call(this);
}

util.inherits(mits, events.EventEmitter);

module.exports = mits;