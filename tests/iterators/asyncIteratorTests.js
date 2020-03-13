import { assert } from 'type-enforcer';

const defaultCallback = () => undefined;

/**
 * Tests for async iterators.
 *
 * @function asyncIteratorTests
 * @private
 *
 * @param {Function} test - The function to test.
 * @param {object} settings - Settings
 */
export function asyncIteratorTests(test, settings) {
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
	settings = settings.settings;

	describe('(function)', () => {
		it('should set the context of the callback', () => {
			const context = {};

			return test.call(context, [0], function() {
				assert.equal(this, context);
			}, settings);
		});

		it('should call the callback for each item in the range', () => {
			const progress = [];

			return test(array.slice(), (...args) => {
				progress.push(args[0]);
				return callback(...args);
			}, settings)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should NOT call the callback for an item that is deleted after the process has started', () => {
			const progress = [];
			const input = array.slice();
			let isMutated = false;

			return test(input, (...args) => {
				if (!isMutated) {
					if (settings && settings.down) {
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
			}, settings)
				.then(() => {
					assert.equal(progress.length, totalProgress.length - 1);
				});
		});

		it(`should ${mutates ? '' : 'not '}mutate the original array`, () => {
			const input = array.slice();

			return test(input, (...args) => callback(...args), settings)
				.then(() => {
					assert.equal(input, clone);
				});
		});

		it('should produce the desired output', () => {
			return test(array.slice(), (...args) => callback(...args), settings)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		if (cancelable !== false) {
			it('should cancel future callbacks if true is returned', () => {
				const progress = [];
				const input = array.slice();

				return test(input, (...args) => {
					progress.push(args[0]);
					if (rejectBy(args[0])) {
						return true;
					}

					return callback(...args);
				}, settings)
					.then((result) => {
						assert.equal(result, canceledResult);
						assert.equal(input, array);
						assert.equal(progress, rejectedProgress);
					});
			});
		}
	});

	describe('(promise)', () => {
		it('should call the callback for each item in the range', () => {
			const progress = [];

			return test(array.slice(), (...args) => new Promise((resolve) => {
				progress.push(args[0]);
				resolve(callback(...args));
			}), settings)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it(`should ${mutates ? '' : 'not '}mutate the original array`, () => {
			const input = array.slice();

			return test(input, (...args) => new Promise((resolve) => {
				resolve(callback(...args));
			}), settings)
				.then(() => {
					assert.equal(input, clone);
				});
		});

		it('should produce the desired output', () => {
			return test(array.slice(), (...args) => new Promise((resolve) => {
				resolve(callback(...args));
			}), settings)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		if (cancelable !== false) {
			it('should cancel future callbacks if resolved with true', () => {
				const progress = [];
				const input = array.slice();

				return test(input, (...args) => new Promise((resolve) => {
					progress.push(args[0]);
					if (rejectBy(args[0])) {
						resolve(true);
					}
					else {
						resolve(callback(...args));
					}
				}), settings)
					.catch((error) => {
						assert.is(error, 'done');
						assert.equal(input, array);
						assert.equal(progress, rejectedProgress);
					});
			});
		}

		it('should cancel future callbacks if rejected', () => {
			const progress = [];
			const input = array.slice();

			return test(input, (...args) => new Promise((resolve, reject) => {
				progress.push(args[0]);
				if (rejectBy(args[0])) {
					reject('done');
				}
				else {
					resolve(callback(...args));
				}
			}), settings)
				.catch((error) => {
					assert.is(error, 'done');
					assert.equal(input, array);
					assert.equal(progress, rejectedProgress);
				});
		});
	});
}

/**
 * Tests for async iterators with no callback.
 *
 * @function asyncIndexTests
 * @private
 *
 * @param {Function} test - The function to test.
 * @param {object} settings - Settings
 */
export function asyncIndexTests(test, settings) {
	const {
		array,
		value,
		clone,
		output
	} = settings;
	settings = settings.settings;

	it('should not mutate the original array', () => {
		const input = array.slice();

		return test(input, value, settings)
			.then(() => {
				assert.equal(input, clone);
			});
	});

	it('should produce the desired output', () => {
		return test(array.slice(), value, settings)
			.then((result) => {
				assert.equal(result, output);
			});
	});
}
