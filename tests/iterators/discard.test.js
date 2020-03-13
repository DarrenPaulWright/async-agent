import { discard } from '../../index.js';
import { asyncIteratorTests } from './asyncIteratorTests.js';

describe('discard', () => {
	const array = [1, 2, 3, 4, 5];

	describe('(no settings)', () => {
		asyncIteratorTests(discard, {
			array,
			clone: [2, 5],
			callback: (value) => [1, 3, 4].includes(value),
			output: [1, 3, 4],
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [1, 2, 3],
			cancelable: false,
			mutates: true
		});
	});

	describe('(down)', () => {
		asyncIteratorTests(discard, {
			array,
			clone: [2, 5],
			callback: (value) => [1, 3, 4].includes(value),
			output: [4, 3, 1],
			rejectBy: (value) => value === 3,
			totalProgress: array.slice().reverse(),
			rejectedProgress: [5, 4, 3],
			settings: {
				down: true
			},
			cancelable: false,
			mutates: true
		});
	});
});
