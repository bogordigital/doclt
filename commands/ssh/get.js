/**
 * @fileoverview Module handling the SSH key getting command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var Display = require('../../lib/Display');
var Util = require('../../lib/Util');

exports.command = 'get <key id>';

exports.aliases = ['i', 'info'];

exports.description = 'Info about an SSH key'.yellow;

exports.builder = function(yargs) {
  yargs.option('key', {
    description: 'Show only the public key'.yellow
  }).group(['key'], 'SSH Key Options:');
  Util.globalConfig(yargs, 2, exports.command);
};

exports.handler = function(argv) {
  var client = Util.getClient();
  client.account.getSshKey(argv.keyid, function(error, key) {
    Util.handleError(error);
    Display.displaySshKey(key, argv.key);
  });
};
