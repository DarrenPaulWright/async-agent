import { sameValue } from 'type-enforcer';
import some from './some.js';

/**
 * Gets the index of an element in an array, or -1 if the element is not found in the array. Uses SameValue comparison performed async.
 *
 * @function indexOf
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {unknown} value - The value to find in array.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with the index of the first match or -1 if no matches are found.
 */
export default function indexOf(array, value, settings) {
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
