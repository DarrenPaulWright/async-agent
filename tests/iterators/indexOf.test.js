import { indexOf } from '../../index.js';
import { asyncIndexTests } from '../helpers/asyncIteratorTests.js';

describe('indexOf', () => {
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
		describe('(found)', () => {
			asyncIndexTests(indexOf, {
				array: input,
				value: input[4],
				clone: input.slice(),
				output: 4
			});
		});

		describe('(not found)', () => {
			asyncIndexTests(indexOf, {
				array: input,
				value: 'asdf',
				clone: input.slice(),
				output: -1
			});
		});
	});

	describe('(down)', () => {
		describe('(found)', () => {
			asyncIndexTests(indexOf, {
				array: input,
				value: input[4],
				clone: input.slice(),
				output: 4,
				settings: { down: true }
			});
		});

		describe('(not found)', () => {
			asyncIndexTests(indexOf, {
				array: input,
				value: 'asdf',
				clone: input.slice(),
				output: -1,
				settings: { down: true }
			});
		});
	});
});
