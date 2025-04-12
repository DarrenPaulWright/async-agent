import { describe, it, assert } from 'hippogriff';
import { rejectAfterWith } from '../index.js';

describe('rejectAfterWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectAfterWith(20, 'testString');
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').catch((error) => {
			assert.equal(error, 'testString');
			assert.atLeast(new Date() - start, 20);
		});
	});
});
