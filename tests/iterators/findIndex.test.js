import { findIndex } from '../../index.js';
import { asyncIteratorTests } from './asyncIteratorTests.js';

describe('findIndex', () => {
	const input = [
		{ n: 1, o: 1 },
		{ n: 2, o: 2 },
		{ n: 3, o: 3 },
		{ n: 3, o: 4 },
		{ n: 3, o: 5 },
		{ n: 4, o: 6 },
		{ n: 5, o: 7 }
	];

	describe('(no settings)', () => {
		asyncIteratorTests(findIndex, {
			array: input,
			clone: input.slice(),
			output: -1,
			rejectBy: (value) => value.n === 3,
			totalProgress: input.slice(),
			rejectedProgress: [input[0], input[1], input[2]],
			canceledResult: 2
		});
	});

	describe('(down)', () => {
		asyncIteratorTests(findIndex, {
			array: input,
			clone: input.slice(),
			output: -1,
			rejectBy: (value) => value.n === 3,
			totalProgress: input.slice().reverse(),
			rejectedProgress: [input[6], input[5], input[4]],
			settings: { down: true },
			canceledResult: 4
		});
	});
});
