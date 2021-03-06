/**
 * @fileoverview Module handling the kernels listing command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../../lib/Display');
var Util = require('../../../lib/Util');

exports.command = 'list <droplet id>';

exports.description = 'List kernels of a droplet'.yellow;

exports.builder = function(yargs) {
  Util.globalConfig(yargs, 3, exports.command);
};

exports.handler = function(argv) {
  var client = Util.getClient();
  client.droplets.kernels(argv.dropletid, function(error, kernels) {
    Util.handleError(error);
    Display.displayKernels(kernels);
  });
};
