import forRange from '../repeaters/forRange.js';

/**
 * Determine whether at least one element in an array passes an async test.
 *
 * @function some
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A truthy value to cancel further iterations.<br>_May return a Promise. Rejections are not caught_.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with true after one callback returns a truthy value or false after all callbacks return a falsey value.
 */
export default function some(array, callback, settings = {}) {
	if (array.length === 0) {
		return Promise.resolve(false);
	}

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return forRange(
		settings.down ? array.length - 1 : 0,
		settings.down ? 0 : array.length - 1,
		(index) => {
			if (index in array) {
				return callback(array[index], index, array);
			}
		},
		settings
	);
}
