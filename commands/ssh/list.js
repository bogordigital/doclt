/**
 * @fileoverview Module handling the SSH key listing command.
 * @author alvin@omgimanerd.tech (Alvin Lin)
 */

exports.command = 'list';

exports.description = 'List all SSH keys'

exports.handler = (argv) => {
  var Table = require('cli-table2');
  var colors = require('colors');
  var digitalocean = require('digitalocean');

  var token = require('../../lib/token');
  var util = require('../../lib/util');
  var client = digitalocean.client(token.get());

  client.account.listSshKeys((error, keys) => {
    util.handleError(error);
    var table = new Table({
      head: ['SSH Key Name', 'SSH Key ID']
    });
    table.push.apply(table, keys.map((key) => {
      return [ key.name.blue, key.id.toString().cyan ];
    }));
    console.log(table.toString());
  });
};