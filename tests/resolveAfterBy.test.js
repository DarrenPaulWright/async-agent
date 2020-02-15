import { assert } from 'type-enforcer';
import { resolveAfterBy } from '../index.js';

describe('resolveAfterBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveAfterBy(20, function(first, last) {
				assert.is(this, thing);
				return `${first} ${last}`;
			});
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'John Doe');
			assert.atLeast(new Date() - start, 20);
		});
	});
});
