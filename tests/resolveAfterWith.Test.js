import { assert } from 'chai';
import { resolveAfterWith } from '../index.js';

describe('resolveAfterWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveAfterWith(20, 'testString');
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.deepEqual(name, 'testString');
			assert.isTrue(new Date() - start >= 20);
		});
	});
});
