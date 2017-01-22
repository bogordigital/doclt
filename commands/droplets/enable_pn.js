/**
 * @fileoverview Module handling private networking enable command for droplets.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var util = require('../../lib/util');

exports.command = 'enable_pn <droplet id>';

exports.aliases = ['enable_private_networking'];

exports.description = 'Enable private networking on a droplet.'.yellow;

exports.builder = (yargs) => {
  util.globalConfig(yargs, exports.command);
};

exports.handler = (argv) => {
  var client = util.getClient();

  client.droplets.enablePrivateNetworking(argv.dropletid, (error) => {
    util.handleError(error, argv.json);
    var message = 'Private networking enabled.';
    if (argv.json) {
      console.log({ message: message });
    } else {
      console.log(message.red);
    }
  });
};
