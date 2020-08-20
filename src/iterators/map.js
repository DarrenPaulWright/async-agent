import some from './some.js';

/**
 * Create a new array populated with the results of calling an async callback on every element in an array.
 *
 * @function map
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A value to assign to the resulting array at the same index.<br>_May return a Promise. Rejections are not caught and any work done up to that point will be lost_.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with a new array with contents set to the results of the callback.
 */
export default function map(array, callback, settings) {
	const output = [];

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return some(array, (element, index) => Promise.resolve(callback(element, index, array))
		.then((result) => {
			output[index] = result;
		}), settings)
		.then(() => output);
}
