import some from './some.js';

/**
 * Execute an async callback for each element in an array.
 *
 * @example
 * ``` javascript
 * import { each } from 'async-agent';
 *
 * each([4, 5, 6], (element) => {
 *         console.log(element);
 *     })
 *     .then(() => {
 *         console.log('done');
 *     }
 *
 * // => 4
 * // => 5
 * // => 6
 * // => done
 * ```
 *
 * @function each
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>
 * __Context:__ same as that provided to the main function.<br>
 * _May return a Promise. Rejections are not caught._
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} Resolves after iteration is complete.
 */
export default function each(array, callback, settings = {}) {
	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return some(array, (element, index) => {
		callback(element, index, array);
	}, settings)
		.then(() => array);
}
