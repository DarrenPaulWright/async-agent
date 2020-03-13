module.exports = [{
	type: 'helper',
	files: [
		'tests/iterators/asyncIteratorTests.js',
		'tests/repeaters/asyncRepeaterTests.js'
	]
}, {
	type: 'src',
	files: [
		'index.js',
		'src/**/*.js'
	]
}, {
	type: 'specs',
	files: [
		'tests/**/*.test.js'
	]
}];
