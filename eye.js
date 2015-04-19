var watch = require("watch");
// var Git = require('nodegit');
var path = require('path')
var Git = require('./git')()

// var repoPath = path.resolve(__dirname);
// var isBare = 0;


// Git.Repository.init(repoPath, isBare).then(function(repo) {
//   console.log('huh')
//   console.log(repo)
// });

Git.init();

function commit(file, action) {
  Git.add('./*')
     .commit(action + ': ' + file)
     // .addRemote('origin', 'git@github.com:Jonovono/mits.git')
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