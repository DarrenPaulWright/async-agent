import some from './some.js';

/**
 * Calls an async callback on each element of an array, reducing the array to a single output value.
 *
 * @function reduce
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ result, element, index, and array.<br>
 * __Context:__ same as that provided to the main function.<br>
 * __Return:__ A value to pass into the next call of the callback as the first parameter.<br>
 * _May return a Promise. Rejections are not caught and any work done up to that point will be lost._
 * @param {*} initialValue - A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved after every callback is resolved or one is rejected.
 */
export default function reduce(array, callback, initialValue, settings) {
	if (this !== undefined) {
		callback = callback.bind(this);
	}
	if (initialValue === undefined) {
		initialValue = array[0];
		array = array.slice(1);
	}

	return some(array, (value, index) => {
		return Promise.resolve(callback(initialValue, value, index, array))
			.then((output) => {
				initialValue = output;
				return false;
			});
	}, settings)
		.then(() => initialValue);
}
