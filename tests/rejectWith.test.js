import { assert } from 'type-enforcer';
import { rejectWith } from '../index.js';

describe('rejectWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectWith('testString');
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').catch((error) => {
			assert.equal(error, 'testString');
		});
	});
});
