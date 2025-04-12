import { describe, it, assert } from 'hippogriff';
import { resolveAfterWith } from '../index.js';

describe('resolveAfterWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveAfterWith(20, 'testString');
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'testString');
			assert.atLeast(new Date() - start, 20);
		});
	});
});
