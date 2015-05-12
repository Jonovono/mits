// Eyes or Mits or something else?
// This will monitor your current repo and auto commit / push commits to a remote on every save

var watch = require("watch");
var path = require('path')
var Git = require('./git')()

Git.init();

function commit(file, action) {
  var dir = path.relative('.', file);
  Git.add('./*')
     .commit(action + ': ' + dir)
     .push('origin', 'master')
}

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