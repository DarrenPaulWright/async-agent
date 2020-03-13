import forRange from './forRange.js';

/**
 * Calls an async callback until true is returned.
 *
 * @function until
 * @category Repeater
 *
 * @param {Function} callback - __Parameters:__ value (starts at 0 and increments up).<br>
 * __Context:__ same as that provided to the main function.<br>
 * __Return:__ A truthy value to cancel further iterations.<br>
 * _May return a Promise. Rejections are not caught._
 * @param {object} [settings] - Optional settings object.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved after every callback is resolved or one is rejected.
 */
export default function until(callback, settings = {}) {
	return forRange.call(this, 0, Infinity, callback, settings);
}
