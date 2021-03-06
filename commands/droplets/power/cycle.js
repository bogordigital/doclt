/**
 * @fileoverview Module handling the droplet power cycling command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../../lib/Display');
var Util = require('../../../lib/Util');

exports.command = 'cycle <droplet id>';

exports.description = 'Power cycle a droplet (hard reset)'.yellow;

exports.builder = function(yargs) {
  Util.globalConfig(yargs, 3, exports.command);
};

exports.handler = function(argv) {
  var client = Util.getClient();
  client.droplets.powerCycle(argv.dropletid, function(error, action) {
    Util.handleError(error);
    Display.displayActionID(action, 'Power cycling droplet...');
  });
};
