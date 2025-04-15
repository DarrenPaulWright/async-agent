import { assert, describe, it } from 'hippogriff';
import { resolveBy } from '../index.js';

describe('resolveBy', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = resolveBy(function(first, last) {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-invalid-this
				assert.is(this, thing);

				return `${ first } ${ last }`;
			});
		}

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'John Doe');
		});
	});
});
