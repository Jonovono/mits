var _ = require('underscore');

module.exports = function(args, callback) {
  
    // optional callback
  callback = callback || function() {};

  // `lib/commands/` holds all of the possible commands. Get these
  // and store them to later look up and call on.

  var commands = this;

  // Aliases for help and verion
  // If the first command is one of these append to args.
  var wantsHelp = args.indexOf('-h') & args.indexOf('--help') & args.indexOf('help');
  if (wantsHelp !== -1) {
    args = _.without(args, '-h', '--help', 'help');
    args.unshift('help');
  }

  var wantsVersion = args.indexOf('-v') & args.indexOf('--version') & args.indexOf('version');
  if (wantsVersion !== -1) {
    args = _.without(args, '-v', '--version', 'version');
    args.unshift('version');
  }

  // If the command has no args, we display help.
  if (!args.length) {
    args.unshift('help');
  }

  // Get the arg in the first position to call that.
  // and get the subcommand, if there is one.
  var command = args[0];
  var subcommand = args[1];
  // If the first argument is a command in the directory, save it to call.
  if (typeof commands[command] === 'function') {
    if (typeof commands[command][subcommand] === 'function') {
      commands = commands[command][subcommand];
    } else {
      commands = commands[command];
    }
  }


  // Arg entered was not a standard command. Call the `unknown` command.
  if (commands === this) {
    this.unknown(args, callback);
  } else {
    // Call the command entered.
    commands.call(this, args, callback);
  }
};