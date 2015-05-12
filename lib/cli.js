var mits = require('./main');

function CLI() {
  this.cli = this;
}

CLI.prototype.help = require('./commands/help');