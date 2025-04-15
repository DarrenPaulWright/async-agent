import { assert, describe, it } from 'hippogriff';
import { rejectAfterWith } from '../index.js';

describe('rejectAfterWith', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = rejectAfterWith(20, new Error('testString'));
		}

		const start = Date.now();
		const thing = new Thing();

		return thing.do()
			.then(() => {
			})
			.catch((error) => {
				assert.equal(error.message, 'testString');
				assert.atLeast(Date.now() - start, 20);
			});
	});
});
