import { assert } from 'chai';
import { resolveBy } from '../src/';

describe('resolveBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveBy(function(first, last) {
				assert.equal(this, thing);
				return `${first} ${last}`;
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'John Doe');
		});
	});
});
