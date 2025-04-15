import { assert, describe, it } from 'hippogriff';
import { clear, defer } from '../index.js';

describe('defer', () => {
	it('should call the callback after other code is done', () => {
		let testVar = 0;

		return new Promise((resolve) => {
			defer(() => {
				assert.is(testVar, 1);

				resolve();
			});

			testVar++;
		});
	});

	it('should call callbacks in the order set', () => {
		let testVar = 0;

		return new Promise((resolve) => {
			defer(() => {
				testVar = 1;
			});
			defer(() => {
				testVar = 2;
			});
			defer(() => {
				assert.is(testVar, 2);

				resolve();
			});
		});
	});

	it('should provide an id to cancel a callback', () => {
		let testVar = 0;

		return new Promise((resolve) => {
			const id = defer(() => {
				testVar++;
			});

			defer(() => {
				assert.is(testVar, 0);
				resolve();
			});
			clear(id);
		});
	});
});
