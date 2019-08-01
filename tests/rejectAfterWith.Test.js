import { assert } from 'chai';
import { rejectAfterWith } from '../src/';

describe('rejectAfterWith', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectAfterWith(20, 'testString');
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').catch((name) => {
			assert.deepEqual(name, 'testString');
			assert.isTrue(new Date() - start >= 20);
		});
	});
});
