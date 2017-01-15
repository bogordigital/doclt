/**
 * @fileoverview Module handling the droplet subcommands.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

var util = require('../lib/util');

exports.command = 'droplets';

exports.aliases = ['droplet'];

exports.description = 'Create, delete, and manage droplets'.yellow;

exports.builder = (yargs) => {
  yargs.commandDir('droplets')
    .demandCommand(1);
  util.globalConfig(yargs);
};
