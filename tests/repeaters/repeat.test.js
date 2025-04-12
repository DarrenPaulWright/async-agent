import { describe } from 'hippogriff';
import { repeat } from '../../index.js';
import asyncRepeaterTests from '../helpers/asyncRepeaterTests.js';

describe('repeat', () => {
	describe('(no settings)', () => {
		describe('6', () => {
			asyncRepeaterTests(repeat, {
				args: [6],
				output: false,
				rejectBy: (value) => value === 3,
				totalProgress: [0, 1, 2, 3, 4, 5],
				rejectedResult: true,
				rejectedProgress: [0, 1, 2, 3]
			});
		});

		describe('0', () => {
			asyncRepeaterTests(repeat, {
				args: [0],
				output: false,
				rejectBy: (value) => value === 3,
				totalProgress: [],
				rejectedResult: false,
				rejectedProgress: []
			});
		});

		describe('-3', () => {
			asyncRepeaterTests(repeat, {
				args: [-3],
				output: false,
				rejectBy: (value) => value === 3,
				totalProgress: [],
				rejectedResult: false,
				rejectedProgress: []
			});
		});
	});
});
