import { assert, describe, it } from 'hippogriff';
import { some } from '../../index.js';
import { asyncIteratorTests } from './asyncIteratorTests.js';

describe('some', () => {
	const array = [1, 2, 3, 4, 5];

	it('should not call the callback if the array is empty', () => {
		return some([], () => {
			assert.is(1, 2);
		})
			.then((result) => {
				assert.is(result, false);
			});
	});

	describe('(no settings)', () => {
		asyncIteratorTests(some, {
			array,
			clone: array.slice(),
			output: false,
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [1, 2, 3],
			canceledResult: true
		});
	});

	describe('(down)', () => {
		asyncIteratorTests(some, {
			array,
			clone: array.slice(),
			output: false,
			rejectBy: (value) => value === 3,
			totalProgress: array.slice().reverse(),
			rejectedProgress: [5, 4, 3],
			settings: {
				down: true
			},
			canceledResult: true
		});
	});
});
