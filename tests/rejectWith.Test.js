import { assert } from 'chai';
import { rejectWith } from '../src/';

describe('rejectWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectWith('testString');
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').catch((name) => {
			assert.equal(name, 'testString');
		});
	});
});