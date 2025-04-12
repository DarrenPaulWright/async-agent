import { describe, it, assert } from 'hippogriff';
import { resolveWith } from '../index.js';

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
