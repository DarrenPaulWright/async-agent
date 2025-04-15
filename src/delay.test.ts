import { assert, describe, it } from 'hippogriff';
import { clear, delay } from '../index.js';

describe('delay', () => {
	it('should call the callback after other code is done', () => {
		let testVar = 0;

		return new Promise((resolve) => {
			delay(() => {
				assert.is(testVar, 1);
				resolve();
			});
			testVar++;
		});
	});

	it('should call callbacks in the order set', () => {
		let testVar = 0;

		return new Promise((resolve) => {
			delay(() => {
				testVar = 1;
			});
			delay(() => {
				testVar = 2;
			});
			delay(() => {
				assert.is(testVar, 2);
				resolve();
			});
		});
	});

	it('should provide an id to cancel a callback', () => {
		let testVar = 0;

		return new Promise((resolve) => {
			const id = delay(() => {
				testVar++;
			});

			delay(() => {
				assert.is(testVar, 0);
				resolve();
			});
			clear(id);
		});
	});

	it('should call the callback after the allotted time', () => {
		const now = performance.now();

		return new Promise((resolve) => {
			delay(() => {
				assert.moreThan(performance.now() - now, 9);
				resolve();
			}, 10);
		});
	});
});
