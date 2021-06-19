import { assert } from 'type-enforcer';
import { fill } from '../../index.js';
import asyncRepeaterTests from '../helpers/asyncRepeaterTests.js';

describe('fill', () => {
	it('should fill an array with the index by default', () => {
		return fill(3)
			.then((result) => {
				assert.equal(result, [0, 1, 2]);
			});
	});

	it('should fill an array with the result of a callback', () => {
		return fill(3, (index) => index * 2)
			.then((result) => {
				assert.equal(result, [0, 2, 4]);
			});
	});

	asyncRepeaterTests(fill, {
		args: [6],
		output: [0, 1, 2, 3, 4, 5],
		callback: (index) => index,
		rejectBy: (value) => value === 3,
		totalProgress: [0, 1, 2, 3, 4, 5],
		rejectedResult: true,
		rejectedProgress: [0, 1, 2, 3],
		cancelable: false
	});
});
