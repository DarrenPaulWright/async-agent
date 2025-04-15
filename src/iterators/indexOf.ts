import { sameValue } from 'type-enforcer';
import some, { type IIteratorSettings } from './some.js';

/**
 * Gets the index of an element in an array, or -1 if the element is not found in the array. Uses SameValue comparison performed async.
 */
export default function indexOf(
	array: Array<unknown>,
	value: unknown,
	settings: IIteratorSettings = {}
): Promise<number> {
	let found = -1;

	return some(array, (element, index) => {
		if (sameValue(element, value)) {
			found = index;

			return true;
		}

		return false;
	}, settings)
		.then(() => found);
}
