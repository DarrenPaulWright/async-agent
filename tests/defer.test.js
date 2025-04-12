import { describe, it, assert } from 'hippogriff';
import { clear, defer } from '../index.js';

/* eslint-disable unicorn/prevent-abbreviations */
describe('defer', () => {
	it('should call the callback after other code is done', (done) => {
		let testVar = 0;
		defer(() => {
			assert.is(testVar, 1);
			done();
		});
		testVar++;
	});

	it('should call callbacks in the order set', (done) => {
		let testVar = 0;
		defer(() => {
			testVar = 1;
		});
		defer(() => {
			testVar = 2;
		});
		defer(() => {
			assert.is(testVar, 2);
			done();
		});
	});

	it('should provide an id to cancel a callback', (done) => {
		let testVar = 0;
		const id = defer(() => {
			testVar++;
		});
		defer(() => {
			assert.is(testVar, 0);
			done();
		});
		clear(id);
	});
});
