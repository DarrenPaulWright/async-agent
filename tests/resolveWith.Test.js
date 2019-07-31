import { assert } from 'chai';
import { resolveWith } from '../src/';

describe('resolveWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveWith('testString');
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'testString');
		});
	});
});
