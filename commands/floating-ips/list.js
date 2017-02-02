/**
 * @fileoverview Module handling the floating-ip listing command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../lib/Display');
var Util = require('../../lib/Util');

exports.command = 'list';

exports.aliases = ['ls'];

exports.description = 'List all floating-ips'.yellow;

exports.builder = (yargs) => {
  Util.globalConfig(yargs, 2, exports.command);
};

exports.handler = (argv) => {
  var client = Util.getClient();
  client.floatingIps.list((error, ips) => {
    Util.handleError(error);
    Display.displayFloatingIps(ips);
  });
};
