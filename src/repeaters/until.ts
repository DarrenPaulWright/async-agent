import forRange, { type IForRangeSettings } from './forRange.js';

/**
 * Calls an async callback until true is returned.
 */
export default function until<Context, ReturnValue>(
	this: Context,
	callback: (this: Context, index: number) => ReturnValue | PromiseLike<ReturnValue>,
	settings: IForRangeSettings = {}
): ReturnType<typeof forRange<Context, ReturnValue>> {
	return (forRange<Context, ReturnValue>).call(this, 0, Infinity, callback, settings);
}
