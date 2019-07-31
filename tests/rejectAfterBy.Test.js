import { assert } from 'chai';
import { rejectAfterBy } from '../src/';

describe('resolveAfterBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectAfterBy(20, function(first, last) {
				assert.equal(this, thing);
				return `${first} ${last}`;
			});
		};

		const start = new Date();
		const thing = new Thing();

		return thing.do('John', 'Doe').catch((name) => {
			assert.equal(name, 'John Doe');
			assert.isTrue(new Date() - start >= 20);
		});
	});
});
