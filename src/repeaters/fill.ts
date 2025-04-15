import { enforceInteger } from 'type-enforcer';
import type { IForRangeSettings } from './forRange.js';
import repeat from './repeat.js';

const defaultCallback = (index: number): number => index;

/**
 * Returns an array of specified length filled with either the index value or the value returned from an async callback.
 */
export default function fill<Context, ReturnValue>(
	this: Context,
	length: number,
	callback: ((this: Context, index: number) => ReturnValue | PromiseLike<ReturnValue>) =
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		defaultCallback as (index: number) => ReturnValue,
	settings: IForRangeSettings = {}
): Promise<Array<ReturnValue>> {
	const output = new Array<ReturnValue>(length);
	let actualLength = enforceInteger(length, 0, false, 0);
	const boundCallback = this === undefined ?
		callback :
		callback.bind(this);

	// eslint-disable-next-line no-useless-assignment
	return repeat(actualLength--, (index) => {
		// @ts-expect-error Context
		return Promise.resolve(boundCallback(index))
			.then((value) => {
				output[index] = value;
			});
	}, settings)
		.then(() => output);
}
