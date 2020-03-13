import { until } from '../../index.js';
import asyncRepeaterTests from './asyncRepeaterTests.js';

describe('until', () => {
	describe('(no settings)', () => {
		asyncRepeaterTests(until, {
			args: [],
			output: true,
			callback: (index) => index === 5,
			rejectBy: (value) => value === 3,
			totalProgress: [0, 1, 2, 3, 4, 5],
			rejectedResult: true,
			rejectedProgress: [0, 1, 2, 3]
		});
	});

	describe('(down)', () => {
		asyncRepeaterTests(until, {
			args: [],
			output: true,
			callback: (index) => index === 5,
			rejectBy: (value) => value === 7,
			totalProgress: [0, 1, 2, 3, 4, 5],
			rejectedResult: true,
			rejectedProgress: [0, 1, 2, 3, 4, 5],
			settings: { down: true, start: 10 }
		});
	});
});
