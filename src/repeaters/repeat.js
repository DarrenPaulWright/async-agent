import { enforceInteger } from 'type-enforcer';
import forRange from './forRange.js';

/**
 * @typedef integer
 * @private
 */

/**
 * Calls an async callback a specified number of times.
 *
 * @function repeat
 * @category Repeater
 *
 * @param {integer} times - Number of times to call the callback.
 * @param {Function} callback - __Parameters:__ value (starts at 0 and increments up).<br>__Context:__ same as that provided to the main function.<br>__Return:__ A truthy value to cancel further iterations.<br>_May return a Promise. Rejections are not caught_.
 * @param {object} [settings] - Settings object.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with true if iteration was cancelled by returning a truthy value in the callback, otherwise false.
 */
export default function repeat(times, callback, settings = {}) {
	times = enforceInteger(times, 0, false, 0);

	if (times < 1) {
		return Promise.resolve(false);
	}

	return forRange.call(this, 0, times - 1, callback, settings);
}
