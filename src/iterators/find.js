import findIndex from './findIndex.js';

/**
 * Gets the first element in an array that passes an async test, or undefined if no element passes the test.
 *
 * @function find
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A truthy value to indicate a match.<br>_May return a Promise. Rejections are not caught_.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with the matched element or undefined if no matches are found.
 */
export default function find(array, callback, settings) {
	return findIndex.call(this, array, callback, settings, this)
		.then((result) => array[result]);
}
