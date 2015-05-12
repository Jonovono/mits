var mits = require('./main');

function CLI() {
  this.cli = this;
}

CLI.prototype.argv = require('./argv');
CLI.prototype.help = require('./commands/help');