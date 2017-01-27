/**
 * @fileoverview Module handling the droplet backup listing command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../../lib/Display');
var Util = require('../../../lib/Util');

exports.command = 'list <droplet id>';

exports.aliases = ['ls'];

exports.description = 'List all backups of a droplet'.yellow;

exports.builder = (yargs) => {
  Util.globalConfig(yargs, 2, exports.command);
};

exports.handler = (argv) => {
  var client = Util.getClient();
  client.droplets.backups(argv.dropletid, (error, backups) => {
    Util.handleError(error);
    Display.displayImages(backups);
  });
};