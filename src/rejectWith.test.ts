import { assert, describe, it } from 'hippogriff';
import { rejectWith } from '../index.js';

describe('rejectWith', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = rejectWith(new Error('testString'));
		}

		const thing = new Thing();

		return thing.do()
			.then(() => {
			})
			.catch((error) => {
				assert.equal(error.message, 'testString');
			});
	});
});
