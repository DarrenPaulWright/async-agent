import { enforceInteger } from 'type-enforcer';
import forRange, { type IForRangeSettings } from './forRange.js';

/**
 * Calls an async callback a specified number of times.
 */
export default function repeat<Context, ReturnValue>(
	this: Context,
	times: number,
	callback: (this: Context, index: number) => ReturnValue | PromiseLike<ReturnValue>,
	settings: IForRangeSettings = {}
): ReturnType<typeof forRange<Context, ReturnValue>> {
	const actualTimes = enforceInteger(times, 0, false, 0);

	if (actualTimes < 1) {
		return Promise.resolve(false);
	}

	return (forRange<Context, unknown>).call(this, 0, actualTimes - 1, callback, settings);
}
