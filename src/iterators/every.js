import some from './some.js';

/**
 * Determine whether every element in an array passes an async test.
 *
 * @function every
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>
 * __Context:__ same as that provided to the main function.<br>
 * __Return:__ A falsey value to indicate a failure.<br>
 * _May return a Promise. Rejections are not caught._
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved after every callback is done or a callback returns true or an error is caught.
 */
export default function every(array, callback, settings) {
	let result = true;

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return some(array, (element, index) => {
		return !(result = Boolean(callback(element, index, array)));
	}, settings)
		.then(() => result);
}
