import some, { type IIteratorSettings } from './some.js';

interface IRun {
	start: number;
	end: number;
}

const getRuns = (indexes: Array<number>, down = false): Array<IRun> => {
	const runs: Array<IRun> = [];
	let last: IRun = {
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
 */
export default function discard<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (this: Context, value: Type, index: number, array: Array<Type>) => unknown,
	settings: IIteratorSettings = {}
): Promise<Array<Type>> {
	const output: Array<Type> = [];
	const indexes: Array<number> = [];

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return some(array, (element, index) => {
		// @ts-expect-error context
		return Promise.resolve(boundCallback(element, index, array))
			.then((result) => {
				if (result) {
					output.push(array[index]);
					indexes.push(index);
				}
			});
	}, settings)
		.then(() => some(getRuns(indexes, settings.down), (run) => {
			array.splice(run.start, run.end - run.start + 1);
		}, { down: !settings.down }))
		.then(() => output);
}
