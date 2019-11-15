import { assert } from 'chai';
import { rejectBy } from '../index';

describe('rejectBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = rejectBy(function(first, last) {
				assert.equal(this, thing);
				return `${first} ${last}`;
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').catch((name) => {
			assert.deepEqual(name, 'John Doe');
		});
	});
});
