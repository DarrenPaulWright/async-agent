import { assert } from 'type-enforcer';
import { clear, delay } from '../index.js';

/* eslint-disable unicorn/prevent-abbreviations */
describe('delay', () => {
	it('should call the callback after other code is done', (done) => {
		let testVar = 0;
		delay(() => {
			assert.is(testVar, 1);
			done();
		});
		testVar++;
	});

	it('should call callbacks in the order set', (done) => {
		let testVar = 0;
		delay(() => {
			testVar = 1;
		});
		delay(() => {
			testVar = 2;
		});
		delay(() => {
			assert.is(testVar, 2);
			done();
		});
	});

	it('should provide an id to cancel a callback', (done) => {
		let testVar = 0;
		const id = delay(() => {
			testVar++;
		});
		delay(() => {
			assert.is(testVar, 0);
			done();
		});
		clear(id);
	});

	it('should call the callback after the allotted time', (done) => {
		const now = performance.now();
		delay(() => {
			assert.moreThan(performance.now() - now, 9);
			done();
		}, 10);
	});
});
