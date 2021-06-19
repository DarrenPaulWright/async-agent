import { map } from '../../index.js';
import { asyncIteratorTests } from '../helpers/asyncIteratorTests.js';

describe('map', () => {
	const array = [1, 2, 3, 4, 5];

	describe('(no settings)', () => {
		asyncIteratorTests(map, {
			array,
			clone: array.slice(),
			callback: (value) => value * 2,
			output: [2, 4, 6, 8, 10],
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [1, 2, 3],
			cancelable: false
		});
	});

	describe('(down)', () => {
		asyncIteratorTests(map, {
			array,
			clone: array.slice(),
			callback: (value) => value * 2,
			output: [2, 4, 6, 8, 10],
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
