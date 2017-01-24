/**
 * @fileoverview Module handling the droplet snapshots subcommands.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var util = require('../../lib/util');

exports.command = 'snapshots';

exports.aliases = ['snapshot'];

exports.description = 'List and take snapshots of a droplet'.yellow;

exports.builder = (yargs) => {
  yargs.commandDir('snapshots');
  util.globalConfig(yargs, exports.command, true);
};
