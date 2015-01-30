/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/selectize/dist/js/standalone/selectize.js');
app.import('bower_components/selectize/dist/css/selectize.css');
app.import('bower_components/selectize/dist/css/selectize.bootstrap3.css');
app.import('vendor/ui-selectize/ui-selectize.css');
app.import('vendor/ui-selectize/fast_click.js');

module.exports = app.toTree();
