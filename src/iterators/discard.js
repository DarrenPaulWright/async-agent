import some from './some.js';

const getRuns = (indexes, down = false) => {
	const runs = [];
	let last = {
		start: indexes[0],
		end: indexes.unshift()
	};

	indexes.forEach((index) => {
		if (!down && last.end + 1 === index) {
			last.end = index;
		}
		else if (down && last.start - 1 === index) {
			last.start = index;
		}
		else {
			last = {
				start: index,
				end: index
			};

			runs.push(last);
		}
	});

	return runs;
};

/**
 * Discard elements from an array, in place, that pass an async test. The array is only mutated if and when all iterations are completed successfully.
 *
 * @function discard
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>
 * __Context:__ same as that provided to the main function.<br>
 * __Return:__ A truthy value to discard that element.<br>
 * _May return a Promise. Rejections are not caught and any work done up to that point will be lost._
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved after every callback is resolved or one is rejected. If iterations complete without rejection, then the array is mutated and the Promise is resolved with an array of the discarded elements.
 */
export default function discard(array, callback, settings = {}) {
	const output = [];
	const indexes = [];

	if (this !== undefined) {
		callback = callback.bind(this);
	}

	return some(array, (element, index) => {
		return Promise.resolve(callback(element, index, array))
			.then((result) => {
				if (result) {
					output.push(array[index]);
					indexes.push(index);
				}
			});
	}, settings)
		.then(() => {
			return new Promise((resolve) => {
				some(getRuns(indexes, settings.down), (run) => {
					array.splice(run.start, run.end - run.start + 1);
				}, { down: !settings.down })
					.then(() => {
						resolve(output);
					});
			});
		});
}
