import { assert, describe, it } from 'hippogriff';
import { resolveAfterBy } from '../index.js';

describe('resolveAfterBy', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = resolveAfterBy(20, function(first, last) {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-invalid-this
				assert.is(this, thing);

				return `${ first } ${ last }`;
			});
		}

		const start = Date.now();
		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'John Doe');
			assert.atLeast(Date.now() - start, 20);
		});
	});
});
