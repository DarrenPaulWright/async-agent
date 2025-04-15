import { assert, describe, it } from 'hippogriff';
import { wait } from '../index.js';

describe('wait', () => {
	it('should call the callback after other code is done', () => {
		let testVar = 0;

		const test = wait().then(() => {
			assert.is(testVar, 1);
		});

		testVar++;

		return test;
	});

	it('should call the callback after the allotted time', () => {
		const now = performance.now();

		return wait(10).then(() => {
			assert.moreThan(performance.now() - now, 9);
		});
	});
});
