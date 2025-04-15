import { assert, describe, it } from 'hippogriff';
import { resolveWith } from '../index.js';

describe('resolveWith', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = resolveWith('testString');
		}

		const thing = new Thing();

		return thing.do().then((name) => {
			assert.equal(name, 'testString');
		});
	});
});
