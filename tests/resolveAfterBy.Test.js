import { assert } from 'chai';
import { resolveAfterBy } from '../index';

describe('resolveAfterBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveAfterBy(20, function(first, last) {
				assert.equal(this, thing);
				return `${first} ${last}`;
			});
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.deepEqual(name, 'John Doe');
			assert.isTrue(new Date() - start >= 20);
		});
	});
});
