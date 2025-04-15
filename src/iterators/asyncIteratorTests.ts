/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */
import { assert, describe, it } from 'hippogriff';
import type {
	discard,
	each,
	every,
	filter,
	find,
	findIndex,
	includes,
	indexOf,
	map,
	some
} from '../../index.js';
import type { IIteratorSettings } from './some.js';

type IteratorFunction = typeof discard |
	typeof each |
	typeof every |
	typeof filter |
	typeof find |
	typeof findIndex |
	typeof map |
	typeof some;

type IndexIteratorFunction = typeof includes | typeof indexOf;

interface IAsyncIteratorTestSettings<Iterator extends IteratorFunction, Type> {
	array: Array<Type>;
	clone: Array<Type>;
	output: Awaited<ReturnType<Iterator>>;
	rejectedProgress: Array<Type>;
	canceledResult?: Awaited<ReturnType<Iterator>>;
	rejectBy: (value: Type) => boolean;
	cancelable?: boolean;
	mutates?: boolean;
	totalProgress: Array<Type>;
	callback?: (...args: Array<Type>) => unknown;
	settings?: IIteratorSettings;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultCallback = (): void => {
};

/**
 * Tests for async iterators.
 */

export const asyncIteratorTests = <Iterator extends IteratorFunction, Type>(
	test: Iterator,
	settings: IAsyncIteratorTestSettings<Iterator, Type>
): void => {
	const {
		array,
		clone,
		output,
		rejectedProgress,
		canceledResult,
		rejectBy,
		cancelable,
		mutates,
		totalProgress
	} = settings;

	const callback = settings.callback || defaultCallback;
	const testOptions = settings.settings;

	describe('(function)', () => {
		it('should set the context of the callback', () => {
			const context = {};

			// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
			return (test.call(context, [0], function(this: unknown) {
				assert.equal(this, context);
			}, testOptions) as ReturnType<typeof test>)
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				.then(() => {
				});
		});

		it('should call the callback for each item in the range', () => {
			const progress: Array<Type> = [];

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			// eslint-disable-next-line no-useless-call
			return test.call(undefined, array.slice(), (...args: Array<Type>) => {
					progress.push(args[0]);

					return callback(...args);
				}, testOptions)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should NOT call the callback for an item that is deleted after the process has started', () => {
			const progress = [];
			const input = array.slice();
			let isMutated = false;

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(input, (...args: Array<Type>) => {
				if (!isMutated) {
					if (testOptions && testOptions.down) {
						input.shift();
						input.shift();
					}
					else {
						input.pop();
					}

					isMutated = true;
				}

				progress.push(args[0]);

				return callback(...args);
			}, testOptions)
				.then(() => {
					assert.equal(progress.length, totalProgress.length - 1);
				});
		});

		it(`should ${ mutates ? '' : 'not ' }mutate the original array`, () => {
			const input = array.slice();

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(input, (...args: Array<Type>) => {
				return callback(...args);
			}, testOptions)
				.then(() => {
					assert.equal(input, clone);
				});
		});

		it('should produce the desired output', () => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(array.slice(), (...args: Array<Type>) => {
				return callback(...args);
			}, testOptions)
				.then((result: unknown) => {
					assert.equal(result, output);
				});
		});

		if (cancelable !== false) {
			it('should cancel future callbacks if true is returned', () => {
				const progress: Array<Type> = [];
				const input = array.slice();

				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				return test(input, (...args: Array<Type>) => {
					progress.push(args[0]);
					if (rejectBy(args[0])) {
						return true;
					}

					callback(...args);

					return false;
				}, testOptions)
					.then((result: unknown) => {
						assert.equal(result, canceledResult);
						assert.equal(input, array);
						assert.equal(progress, rejectedProgress);
					});
			});
		}
	});

	describe('(promise)', () => {
		it('should call the callback for each item in the range', () => {
			const progress: Array<Type> = [];

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(array.slice(), (...args: Array<Type>) => new Promise((resolve) => {
				progress.push(args[0]);
				resolve(callback(...args));
			}), testOptions)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it(`should ${ mutates ? '' : 'not ' }mutate the original array`, () => {
			const input = array.slice();

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(input, (...args: Array<Type>) => new Promise((resolve) => {
				resolve(callback(...args));
			}), testOptions)
				.then(() => {
					assert.equal(input, clone);
				});
		});

		it('should produce the desired output', () => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(array.slice(), (...args: Array<Type>) => new Promise((resolve) => {
				resolve(callback(...args));
			}), testOptions)
				.then((result: unknown) => {
					assert.equal(result, output);
				});
		});

		if (cancelable !== false) {
			it('should cancel future callbacks if resolved with true', () => {
				const progress: Array<Type> = [];
				const input = array.slice();

				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-expect-error
				return test(input, (...args: Array<Type>) => new Promise((resolve) => {
					progress.push(args[0]);
					if (rejectBy(args[0])) {
						resolve(true);
					}
					else {
						resolve(callback(...args));
					}
				}), testOptions)
					// eslint-disable-next-line @typescript-eslint/no-empty-function
					.then(() => {
					})
					.catch((error: unknown) => {
						assert.is(error, 'done');
						assert.equal(input, array);
						assert.equal(progress, rejectedProgress);
					});
			});
		}

		it('should cancel future callbacks if rejected', () => {
			const progress: Array<Type> = [];
			const input = array.slice();

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			return test(
				input,
				(...args: Array<Type>) => {
					return new Promise((resolve, reject) => {
						progress.push(args[0]);
						if (rejectBy(args[0])) {
							reject(new Error('done'));
						}
						else {
							resolve(callback(...args));
						}
					});
				},
				testOptions
			)
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				.then(() => {
				})
				.catch((error: Error) => {
					assert.is(error.message, 'done');
					assert.equal(input, array);
					assert.equal(progress, rejectedProgress);
				});
		});
	});
};

interface IIndexIteratorTestSettings<Iterator extends IndexIteratorFunction, Type> {
	array: Array<Type>;
	value: Type;
	clone: Array<Type>;
	output: Awaited<ReturnType<Iterator>>;
	settings?: IIteratorSettings;
}

/**
 * Tests for async iterators with no callback.
 */
export const asyncIndexTests = <
	Iterator extends IndexIteratorFunction,
	Type
>(
	test: Iterator,
	settings: IIndexIteratorTestSettings<Iterator, Type>
): void => {
	const {
		array,
		value,
		clone,
		output
	} = settings;

	const testOptions = settings.settings;

	it('should not mutate the original array', () => {
		const input = array.slice();

		return test(input, value, testOptions)
			.then(() => {
				assert.equal(input, clone);
			});
	});

	it('should produce the desired output', () => {
		return test(array.slice(), value, testOptions)
			.then((result) => {
				assert.equal(result, output);
			});
	});
};
