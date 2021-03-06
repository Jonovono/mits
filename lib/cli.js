var mits = require('./main');

function CLI() {
  this.cli = this;
}

CLI.prototype.argv = require('./argv');
CLI.prototype.help = require('./commands/help');
CLI.prototype.version = require('./commands/version');
CLI.prototype.unknown = require('./commands/unknown');
CLI.prototype.watch = require('./commands/watch');

module.exports = CLI;