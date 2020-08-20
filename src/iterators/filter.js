import some from './some.js';

/**
 * Create a new array with all the elements of an array that pass an async test.
 *
 * @function filter
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A truthy value to include this element in the final result.<br>_May return a Promise. Rejections are not caught and any work done up to that point will be lost_.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with a new array of all the values that passed the test.
 */
export default function filter(array, callback, settings) {
	const output = [];

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return some(array, (element, index) =>
		Promise.resolve(callback(element, index, array))
			.then((result) => {
				if (result) {
					output.push(element);
				}
			}), settings)
		.then(() => output);
}
