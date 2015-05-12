var mits = require('../main');
var watch = require("watch");
var path = require('path')
var Git = require('../git')()
Git.init();

module.exports = function() {
  watch.createMonitor(__dirname, {ignoreDotFiles: true},function(monitor) {
    monitor.on('changed', function(f, curr, prev) {
      commit(f, 'CHANGE')
    })
    monitor.on('removed', function(f, stat) {
      commit(f, 'RM')
    })
    monitor.on('created', function(f, stat) {
      commit(f, 'CREATE')
    });
  });
};

function commit(file, action) {
  var dir = path.relative('.', file);
  var msg = action + ': ' + dir;
  mits.emit('info', msg);
  Git.add('./*')
     .commit(msg)
     .push('origin', 'master')
}
