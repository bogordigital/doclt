/**
 * @fileoverview Module handling the floating IP action listing command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../../lib/Display');
var Util = require('../../../lib/Util');

exports.command = 'list <floating ip>';

exports.aliases = ['ls'];

exports.description = 'List all actions performed on a floating IP'.yellow;

exports.builder = function(yargs) {
  var client = Util.getClient();
  client.floatingIps.listActions(function(error, actions) {
    Util.handleError(error);
    Display.displayActions(actions);
  });
};
