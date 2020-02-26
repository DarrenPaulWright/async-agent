const wallabyConfig = require('karma-webpack-bundle').wallabyConfig;
const testRunnerConfig = require('./testRunner.config.js');
const name = require('./package.json').name;

module.exports = wallabyConfig(testRunnerConfig, {name});
