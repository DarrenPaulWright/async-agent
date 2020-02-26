const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	'parser': 'babel-eslint',
	'plugins': [
		'babel',
		'jsdoc'
	],
	'env': {
		'browser': true,
		'node': true,
		'es6': true,
		'mocha': true
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'extends': [
		'eslint:recommended',
		'plugin:jsdoc/recommended'
	],
	'rules': {
		'curly': ERROR,
		'no-console': OFF,
		'no-useless-escape': OFF,
		'jsdoc/check-tag-names': OFF,
		'jsdoc/require-returns-description': OFF
	}
};
