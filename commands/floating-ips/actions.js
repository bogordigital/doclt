/**
 * @fileoverview Module handling the floating IP actions subcommands.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Util = require('../../lib/Util');

exports.command = 'actions';

exports.aliases = ['action'];

exports.description = 'List and fetch floating IP actions'.yellow;

exports.builder = function(yargs) {
  yargs.commandDir('actions');
  Util.globalConfig(yargs, 2, exports.command, true);
};
