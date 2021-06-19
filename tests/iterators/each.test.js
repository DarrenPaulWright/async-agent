import { assert } from 'type-enforcer';
import { each } from '../../index.js';
import { asyncIteratorTests } from '../helpers/asyncIteratorTests.js';

/* eslint-disable unicorn/prevent-abbreviations */
describe('each', () => {
	const array = [1, 2, 3, 4, 5];

	describe('(no settings)', () => {
		asyncIteratorTests(each, {
			array,
			clone: array.slice(),
			output: array.slice(),
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [1, 2, 3],
			cancelable: false
		});

		it('should NOT cancel future callbacks if true is returned', () => {
			const testVar = [];

			return each(array, (value) => {
				testVar.push(value);
				if (value === 3) {
					return true;
				}
			})
				.then((result) => {
					assert.equal(result, array);
					assert.equal(array, [1, 2, 3, 4, 5]);
					assert.equal(testVar, [1, 2, 3, 4, 5]);
				});
		});
	});

	describe('(down)', () => {
		asyncIteratorTests(each, {
			array,
			clone: array.slice(),
			output: array.slice(),
			rejectBy: (value) => value === 3,
			totalProgress: array.slice().reverse(),
			rejectedProgress: [5, 4, 3],
			cancelable: false,
			settings: {
				down: true
			}
		});

		it('should NOT cancel future callbacks if true is returned', () => {
			const testVar = [];

			return each(array, (value) => {
				testVar.push(value);
				if (value === 3) {
					return true;
				}
			}, { down: true })
				.then((result) => {
					assert.equal(result, array);
					assert.equal(array, [1, 2, 3, 4, 5]);
					assert.equal(testVar, [5, 4, 3, 2, 1]);
				});
		});
	});
});
