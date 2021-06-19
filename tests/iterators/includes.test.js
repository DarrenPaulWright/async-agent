import { includes } from '../../index.js';
import { asyncIndexTests } from '../helpers/asyncIteratorTests.js';

describe('includes', () => {
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
			asyncIndexTests(includes, {
				array: input,
				value: input[4],
				clone: input.slice(),
				output: true
			});
		});

		describe('(not found)', () => {
			asyncIndexTests(includes, {
				array: input,
				value: 'asdf',
				clone: input.slice(),
				output: false
			});
		});
	});

	describe('(down)', () => {
		describe('(found)', () => {
			asyncIndexTests(includes, {
				array: input,
				value: input[4],
				clone: input.slice(),
				output: true,
				settings: { down: true }
			});
		});

		describe('(not found)', () => {
			asyncIndexTests(includes, {
				array: input,
				value: 'asdf',
				clone: input.slice(),
				output: false,
				settings: { down: true }
			});
		});
	});
});
