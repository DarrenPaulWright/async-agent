import findIndex from './findIndex.js';
import type { IIteratorSettings } from './some.js';

/**
 * Gets the first element in an array that passes an async test, or undefined if no element passes the test.
 */
export default function find<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (this: Context, value: Type, index: number, array: Array<Type>) => unknown,
	settings: IIteratorSettings = {}
): Promise<Type | undefined> {
	// @ts-expect-error Context
	return (findIndex.call(this, array, callback, settings))
		.then((result) => array[result]);
}
