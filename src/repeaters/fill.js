import { enforceInteger } from 'type-enforcer';
import repeat from './repeat.js';

const defaultCallback = (index) => index;

/**
 * @typedef integer
 * @private
 */

/**
 * Returns an array of specified length filled with either the index value or the value returned from an async callback.
 *
 * @function fill
 * @category Repeater
 *
 * @param {integer} length - The first number passed to the callback.
 * @param {Function} [callback] - __Parameters:__ index.<br>
 * __Context:__ same as that provided to the main function.<br>
 * __Return:__ A value to assign to the resulting array at the same index.<br>
 * __Default:__ (index) => index<br>
 * _May return a Promise. Rejections are not caught and any work done up to that point will be lost._
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with the resulting array.
 */
export default function fill(length, callback = defaultCallback, settings = {}) {
	const output = Array(length);

	length = enforceInteger(length, 0, false, 0);

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return repeat(length--, (index) => new Promise((resolve) => {
		resolve(callback(index));
	}).then((result) => {
		output[index] = result;
	}), settings)
		.then(() => output);
}
