/**
 * @fileoverview Module handling the volume attach command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../lib/Display');
var Util = require('../../lib/Util');

exports.command = 'attach <volume id> <droplet id>';

exports.description = 'Attach a volume'.yellow;

exports.builder = (yargs) => {
  Util.globalConfig(yargs, 2, exports.command);
};

exports.handler = (argv) => {
  var client = Util.getClient();
  client.volumes.attach(argv.volumeid, argv.dropletid, (error, action) => {
    Util.handleError(error);
    Display.displayAction(action, 'Volume attached.');
  });
};
