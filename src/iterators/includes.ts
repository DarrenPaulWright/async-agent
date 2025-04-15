import { sameValue } from 'type-enforcer';
import some, { type IIteratorSettings } from './some.js';

/**
 * Determines if an element is in an array. Uses SameValue comparison performed async.
 */
export default function includes(
	array: Array<unknown>,
	value: unknown,
	settings: IIteratorSettings = {}
): Promise<boolean> {
	return some(array, (element) => sameValue(element, value), settings);
}
