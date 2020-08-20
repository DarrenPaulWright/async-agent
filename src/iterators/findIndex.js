import some from './some.js';

/**
 * Gets the index of the first element in an array that passes an async test, or -1 if no element passes the test.
 *
 * @function findIndex
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A truthy value to indicate a match.<br>_May return a Promise. Rejections are not caught_.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with the index of the first match or -1 if no matches are found.
 */
export default function findIndex(array, callback, settings) {
	let found = -1;

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return some(array, (value, index) =>
		Promise.resolve(callback(value, index, array))
			.then((result) => {
				if (result) {
					found = index;
					return true;
				}
			}), settings)
		.then(() => found);
}
