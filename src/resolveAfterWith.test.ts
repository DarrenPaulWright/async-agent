import { assert, describe, it } from 'hippogriff';
import { resolveAfterWith } from '../index.js';

describe('resolveAfterWith', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = resolveAfterWith(20, 'testString');
		}

		const start = Date.now();
		const thing = new Thing();

		return thing.do().then((name) => {
			assert.equal(name, 'testString');
			assert.atLeast(Date.now() - start, 20);
		});
	});
});
