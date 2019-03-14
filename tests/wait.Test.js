import { assert } from 'chai';
import { wait } from '../src/';

describe('wait', () => {
	it('should call the callback after other code is done', () => {
		let testVar = 0;
		const test = wait().then(() => {
			assert.equal(testVar, 1);
		});
		testVar++;

		return test;
	});

	it('should call the callback after the allotted time', () => {
		const now = performance.now();
		return wait(10).then(() => {
			assert.isAbove(performance.now() - now, 10);
		});
	});
});
