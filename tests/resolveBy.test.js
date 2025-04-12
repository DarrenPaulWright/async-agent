import { describe, it, assert } from 'hippogriff';
import { resolveBy } from '../index.js';

describe('resolveBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = resolveBy(function(first, last) {
				assert.is(this, thing);
				return `${ first } ${ last }`;
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'John Doe');
		});
	});
});
