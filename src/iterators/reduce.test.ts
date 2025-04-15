import { assert, describe, it } from 'hippogriff';
import { reduce } from '../../index.js';
import type { IIteratorSettings } from './some.js';

interface IReduceTestSettings {
	array: Array<number>;
	clone: Array<number>;
	output: Awaited<ReturnType<typeof reduce>>;
	rejectedProgress: Array<number>;
	rejectBy: (value: number) => boolean;
	totalProgress: Array<number>;
	settings?: IIteratorSettings;
}

const reduceTests = (settings: IReduceTestSettings): void => {
	const {
		array,
		clone,
		output,
		rejectedProgress,
		rejectBy,
		totalProgress
	} = settings;

	const testOptions = settings.settings;

	describe('(function)', () => {
		it('should call the callback for each item in the range', () => {
			const progress: Array<number> = [];

			return reduce(array.slice(), (result, value) => {
				progress.push(value);
				result[value] = value;

				return result;
			}, [] as Array<number>, testOptions)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should not call the callback for the first item in the range if the initialValue is undefined', () => {
			let total = 0;
			let countIndex = 0;

			return reduce(array.slice(), (result, value, index) => {
				total++;

				if (index === 0) {
					assert.equal(value, clone[1]);
				}
				else {
					countIndex++;
				}

				return result;
			}, undefined, testOptions)
				.then(() => {
					assert.equal(total, 5);
					assert.equal(countIndex, 4);
				});
		});

		it('should not mutate the original array', () => {
			const input = array.slice();

			return reduce(input, (result, value) => {
				result[value] = value;

				return result;
			}, [] as Array<number>, testOptions)
				.then(() => {
					assert.equal(input, clone);
				});
		});

		it('should produce the desired output', () => {
			return reduce(
				array.slice(),
				(result, value) => {
					result[value] = value;

					return result;
				},
				[] as Array<number>,
				testOptions
			)
				.then((result) => {
					assert.equal(result, output);
				});
		});
	});

	describe('(promise)', () => {
		it('should call the callback for each item in the range', () => {
			const progress: Array<number> = [];

			return reduce(array.slice(), (result, value) => new Promise((resolve) => {
				progress.push(value);
				result[value] = value;
				resolve(result);
			}), [] as Array<number>, testOptions)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should not mutate the original array', () => {
			const input = array.slice();

			return reduce(input, (result, value) => new Promise((resolve) => {
				result[value] = value;
				resolve(result);
			}), [] as Array<number>, testOptions)
				.then(() => {
					assert.equal(input, clone);
				});
		});

		it('should produce the desired output', () => {
			return reduce(array.slice(), (result, value) => new Promise((resolve) => {
				result[value] = value;
				resolve(result);
			}), [] as Array<number>, testOptions)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		it('should cancel future callbacks if rejected', () => {
			const progress: Array<number> = [];
			const input = array.slice();

			return reduce(input, (result, value) => new Promise((resolve, reject) => {
				progress.push(value);
				if (rejectBy(value)) {
					reject(new Error('done'));
				}
				else {
					result[value] = value;
					resolve(result);
				}
			}), [] as Array<number>, testOptions)
				.then(() => {
				})
				.catch((error) => {
					assert.is(error.message, 'done');
					assert.equal(input, array);
					assert.equal(progress, rejectedProgress);
				});
		});
	});
};

describe('reduce', () => {
	const array = [0, 1, 2, 3, 4, 5];

	describe('(no settings)', () => {
		reduceTests({
			array,
			clone: array.slice(),
			output: array.slice(),
			rejectBy: (value) => value === 3,
			totalProgress: array.slice(),
			rejectedProgress: [0, 1, 2, 3]
		});
	});

	describe('(down)', () => {
		reduceTests({
			array,
			clone: array.slice(),
			output: array.slice(),
			rejectBy: (value) => value === 3,
			totalProgress: array.slice().reverse(),
			rejectedProgress: [5, 4, 3],
			settings: {
				down: true
			}
		});
	});
});
