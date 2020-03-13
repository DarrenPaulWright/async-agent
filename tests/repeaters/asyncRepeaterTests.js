import { assert } from 'type-enforcer';

const defaultCallback = () => undefined;

export default (test, settings) => {
	const {
		args,
		output,
		rejectedResult,
		rejectedProgress,
		rejectBy,
		totalProgress,
		cancelable
	} = settings;
	const callback = settings.callback || defaultCallback;
	settings = settings.settings;

	describe('(function)', () => {
		it('should set the context of the callback', () => {
			const context = {};

			return test.call(context, ...args, function(index) {
				assert.equal(this, context);
				return callback(index);
			}, settings);
		});

		it('should call the callback the correct number of times', () => {
			const progress = [];

			return test(...args, (index) => {
				progress.push(index);
				return callback(index);
			}, settings)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should produce the desired output', () => {
			return test(...args, callback, settings)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		if (rejectedResult !== false) {
			it('should add a delay between calls', () => {
				const start = new Date();
				const delaySettings = {
					...settings,
					delay: 5
				};

				return test(...args, (...innerArgs) => {
					delaySettings.delay = 0;

					return callback(...innerArgs);
				}, delaySettings)
					.then(() => {
						assert.atLeast(new Date() - start, 5);
						assert.atMost(new Date() - start, 10);
					});
			});
		}

		if (cancelable !== false) {
			it('should cancel future callbacks if true is returned', () => {
				const progress = [];

				return test(...args, (index) => {
					progress.push(index);
					if (rejectBy(index)) {
						return true;
					}

					return callback(index);
				}, settings)
					.then((result) => {
						assert.is(result, rejectedResult);
						assert.equal(progress, rejectedProgress);
					});
			});
		}
	});

	describe('(promise)', () => {
		it('should call the callback the correct number of times', () => {
			const progress = [];

			return test(...args, (index) => new Promise((resolve) => {
				progress.push(index);
				resolve(callback(index));
			}), settings)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should produce the desired output', () => {
			return test(...args, (index) => new Promise((resolve) => {
				resolve(callback(index));
			}), settings)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		if (cancelable !== false) {
			it('should cancel future callbacks if resolved with true', () => {
				const progress = [];

				return test(...args, (index) => new Promise((resolve) => {
					progress.push(index);
					if (rejectBy(index)) {
						resolve(true);
					}
					else {
						resolve(callback(index));
					}
				}), settings)
					.then((result) => {
						assert.is(result, rejectedResult);
						assert.equal(progress, rejectedProgress);
					});
			});
		}

		it('should cancel future callbacks if rejected', () => {
			const progress = [];

			return test(...args, (index) => new Promise((resolve, reject) => {
				progress.push(index);
				if (rejectBy(index)) {
					reject('done');
				}
				else {
					resolve(callback(index));
				}
			}), settings)
				.catch((error) => {
					assert.is(error, 'done');
					assert.equal(progress, rejectedProgress);
				});
		});
	});
};
