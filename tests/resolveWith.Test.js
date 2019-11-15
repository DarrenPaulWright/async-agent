import { assert } from 'chai';
import { resolveWith } from '../index';

describe('resolveWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveWith('testString');
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.deepEqual(name, 'testString');
		});
	});
});
