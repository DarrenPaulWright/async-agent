const { wallabyConfig } = require('karma-webpack-bundle');
const testRunnerConfig = require('./testRunner.config.js');
const { name } = require('./package.json');

module.exports = wallabyConfig(testRunnerConfig, { name });
