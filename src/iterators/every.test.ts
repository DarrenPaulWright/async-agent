import { assert, describe, it } from 'hippogriff';
import { every } from '../../index.js';
import { asyncIteratorTests } from './asyncIteratorTests.js';

describe('every', () => {
	const array = [1, 2, 3, 4, 5];

	it('should return true if the array is empty', () => {
		return every([], () => true)
			.then((result) => {
				assert.equal(result, true);
			});
	});

	describe('(no settings)', () => {
		asyncIteratorTests<typeof every, number>(every, {
			array,
			clone: array.slice(),
			callback: () => true,
			output: true,
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [1, 2, 3],
			cancelable: false
		});
	});

	describe('(down)', () => {
		asyncIteratorTests<typeof every, number>(every, {
			array,
			clone: array.slice(),
			callback: () => true,
			output: true,
			rejectBy: (value) => value === 3,
			totalProgress: array.slice().reverse(),
			rejectedProgress: [5, 4, 3],
			settings: {
				down: true
			},
			cancelable: false
		});
	});
});
