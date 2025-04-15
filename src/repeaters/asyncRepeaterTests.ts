import { assert, describe, it } from 'hippogriff';
import type { fill, forRange, repeat, until } from '../../index.js';
import type { IForRangeSettings } from './forRange.js';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultCallback = (): void => {
};

type RepeaterFunction = typeof until |
	typeof repeat |
	typeof fill |
	typeof forRange;

interface IAsyncRepeaterTestSettings<Repeater extends RepeaterFunction> {
	args: Array<number>;
	output: Awaited<ReturnType<Repeater>>;
	rejectedProgress: Array<number>;
	rejectedResult: boolean;
	rejectBy: (value: number) => boolean;
	cancelable?: boolean;
	totalProgress: Array<number>;
	callback?: (...args: Array<unknown>) => unknown;
	settings?: IForRangeSettings;
}

export default <Repeater extends RepeaterFunction>(
	test: Repeater,
	settings: IAsyncRepeaterTestSettings<Repeater>
): void => {
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
	const testOptions = settings.settings;

	describe('(function)', () => {
		it('should set the context of the callback', () => {
			const context = {};

			// @ts-expect-error args
			// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
			return (test.call(context, ...args, function(this: unknown, index: number) {
				assert.equal(this, context);

				return callback(index);
			}, testOptions) as ReturnType<typeof test>)
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				.then(() => {
				});
		});

		it('should call the callback the correct number of times', () => {
			const progress: Array<number> = [];

			// @ts-expect-error args
			return test(...args, (index) => {
				progress.push(index);

				return callback(index);
			}, testOptions)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should produce the desired output', () => {
			// @ts-expect-error args
			return test(...args, callback, testOptions)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		if (rejectedResult) {
			it('should add a delay between calls', () => {
				const start = new Date();
				const delaySettings = {
					...testOptions,
					delay: 5
				};

				// @ts-expect-error args
				return test(...args, (...innerArgs) => {
					delaySettings.delay = 0;

					return callback(...innerArgs);
				}, delaySettings)
					.then(() => {
						assert.atLeast(Date.now() - start.getTime(), 5);
						assert.atMost(Date.now() - start.getTime(), 300);
					});
			});
		}

		if (cancelable !== false) {
			it('should cancel future callbacks if true is returned', () => {
				const progress: Array<number> = [];

				// @ts-expect-error args
				return test(...args, (index: number): boolean => {
					progress.push(index);
					if (rejectBy(index)) {
						return true;
					}

					callback(index);

					return false;
				}, testOptions)
					.then((result) => {
						assert.is(result, rejectedResult);
						assert.equal(progress, rejectedProgress);
					});
			});
		}
	});

	describe('(promise)', () => {
		it('should call the callback the correct number of times', () => {
			const progress: Array<number> = [];

			// @ts-expect-error args
			return test(...args, (index) => new Promise((resolve) => {
				progress.push(index);

				resolve(callback(index));
			}), testOptions)
				.then(() => {
					assert.equal(progress, totalProgress);
				});
		});

		it('should produce the desired output', () => {
			// @ts-expect-error args
			return test(...args, (index) => new Promise((resolve) => {
				resolve(callback(index));
			}), testOptions)
				.then((result) => {
					assert.equal(result, output);
				});
		});

		if (cancelable !== false) {
			it('should cancel future callbacks if resolved with true', () => {
				const progress: Array<number> = [];

				// @ts-expect-error args
				return test(...args, (index: number) => new Promise((resolve) => {
					progress.push(index);
					if (rejectBy(index)) {
						resolve(true);
					}
					else {
						resolve(callback(index));
					}
				}), testOptions)
					.then((result) => {
						assert.is(result, rejectedResult);
						assert.equal(progress, rejectedProgress);
					});
			});
		}

		it('should cancel future callbacks if rejected', () => {
			const progress: Array<number> = [];

			// @ts-expect-error args
			// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
			return (test(...args, (index: number) => new Promise((resolve, reject) => {
				progress.push(index);
				if (rejectBy(index)) {
					reject(new Error('done'));
				}
				else {
					resolve(callback(index));
				}
			}), testOptions) as ReturnType<typeof test>)
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				.then(() => {
				})
				.catch((error) => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
					assert.is((error as Error).message, 'done');
					assert.equal(progress, rejectedProgress);
				});
		});
	});
};
