import { describe, it, assert } from 'hippogriff';
import { filter } from '../../index.js';
import { asyncIteratorTests } from '../helpers/asyncIteratorTests.js';

describe('filter', () => {
	const array = [1, 2, 3, 4, 5];

	describe('(no settings)', () => {
		asyncIteratorTests(filter, {
			array,
			clone: array.slice(),
			callback: (value) => value % 2 === 0,
			output: [2, 4],
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [1, 2, 3],
			cancelable: false
		});
	});

	describe('(down)', () => {
		asyncIteratorTests(filter, {
			array,
			clone: array.slice(),
			callback: (value) => value % 2 === 0,
			output: [4, 2],
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
