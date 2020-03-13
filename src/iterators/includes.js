import { sameValue } from 'type-enforcer';
import some from './some.js';

/**
 * Determines if an element is in an array. Uses SameValue comparison performed async.
 *
 * @function includes
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {*} value - The value to find in array.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with true if a match is found or false if no matches are found.
 */
export default function includes(array, value, settings) {
	return some(array, (element) => sameValue(element, value), settings);
}
