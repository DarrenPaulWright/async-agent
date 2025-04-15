import { assert, describe, it } from 'hippogriff';
import { each } from '../../index.js';
import { asyncIteratorTests } from './asyncIteratorTests.js';

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
			const testVar: Array<number> = [];

			// @ts-expect-error Needed for testing
			return each(array, (value) => {
				testVar.push(value);

				return value === 3;
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
			const testVar: Array<number> = [];

			// @ts-expect-error Needed for testing
			return each(array, (value) => {
				testVar.push(value);

				return value === 3;
			}, { down: true })
				.then((result) => {
					assert.equal(result, array);
					assert.equal(array, [1, 2, 3, 4, 5]);
					assert.equal(testVar, [5, 4, 3, 2, 1]);
				});
		});
	});
});
