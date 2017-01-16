/**
 * @fileoverview Module handling the droplet action listing command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

exports.command = 'list <droplet id>';

exports.aliases = ['ls'];

exports.builder = (yargs) => {
  yargs.option('limit', {
    alias: 'number',
    description: 'The maximum number of actions to fetch',
    number: true
  });
}

exports.description = 'List all actions performed on a droplet'.yellow;

exports.handler = (argv) => {
  var Table = require('cli-table2');
  var digitalocean = require('digitalocean');

  var token = require('../../../lib/token');
  var util = require('../../../lib/util');
  var client = digitalocean.client(token.get());

  client.droplets.listActions(argv.dropletid, (error, actions) => {
    util.handleError(error);
    var table = new Table({
      head: ['ID', 'Status', 'Type', 'Completed']
    });
    if (typeof(argv.limit) === 'number') {
      actions = actions.slice(0, argv.limit);
    }
    table.push.apply(table, actions.map((action) => {
      return [
        action.id.toString().bold.cyan,
        util.colorActionStatus(action.status),
        action.type,
        new Date(action.completed_at).toLocaleString()
      ];
    }));
    console.log(table.toString());
  });
};
