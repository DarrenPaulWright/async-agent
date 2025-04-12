import { describe } from 'hippogriff';
import { forRange } from '../../index.js';
import asyncRepeaterTests from '../helpers/asyncRepeaterTests.js';

describe('forRange', () => {
	describe('(no settings)', () => {
		describe('increment', () => {
			asyncRepeaterTests(forRange, {
				args: [3, 10],
				output: false,
				rejectBy: (value) => value === 7,
				totalProgress: [3, 4, 5, 6, 7, 8, 9, 10],
				rejectedResult: true,
				rejectedProgress: [3, 4, 5, 6, 7]
			});
		});

		describe('increment across zero', () => {
			asyncRepeaterTests(forRange, {
				args: [-3, 10],
				output: false,
				rejectBy: (value) => value === 7,
				totalProgress: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				rejectedResult: true,
				rejectedProgress: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
			});
		});

		describe('decrement', () => {
			asyncRepeaterTests(forRange, {
				args: [10, 3],
				output: false,
				rejectBy: (value) => value === 7,
				totalProgress: [10, 9, 8, 7, 6, 5, 4, 3],
				rejectedResult: true,
				rejectedProgress: [10, 9, 8, 7]
			});
		});

		describe('decrement across zero', () => {
			asyncRepeaterTests(forRange, {
				args: [10, -3],
				output: false,
				rejectBy: (value) => value === 7,
				totalProgress: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3],
				rejectedResult: true,
				rejectedProgress: [10, 9, 8, 7]
			});
		});
	});

	describe('(down)', () => {
		asyncRepeaterTests(forRange, {
			args: [3, 10],
			output: false,
			rejectBy: (value) => value === 7,
			totalProgress: [3, 4, 5, 6, 7, 8, 9, 10],
			rejectedResult: true,
			rejectedProgress: [3, 4, 5, 6, 7],
			settings: { down: true }
		});
	});
});
