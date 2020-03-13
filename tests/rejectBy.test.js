import { assert } from 'type-enforcer';
import { rejectBy } from '../index.js';

describe('rejectBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectBy(function(first, last) {
				assert.is(this, thing);
				return `${first} ${last}`;
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').catch((error) => {
			assert.equal(error, 'John Doe');
		});
	});
});
