var watch = require("watch");
var path = require('path')
var Git = require('./git')()

Git.init();

function commit(file, action) {
  var dir = path.relative('.', f);
  Git.add('./*')
     .commit(action + ': ' + dir)
     .push('origin', 'master')
}

watch.createMonitor(__dirname, {ignoreDotFiles: true},function(monitor) {
  monitor.on('changed', function(f, curr, prev) {
    var dir = path.relative('.', f);
    console.log('dir ', dir)
    commit(dir, 'CHANGE')
  })
  monitor.on('removed', function(f, stat) {
    var dir = path.relative('.', f);
    console.log('dir ', dir)
    commit(dir, 'RM')
  })
  monitor.on('created', function(f, stat) {
    var dir = path.relative('.', f);
    console.log('dir ', dir)
    commit(dir, 'CREATE')
  });
});


// a