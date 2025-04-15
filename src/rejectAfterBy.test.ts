import { assert, describe, it } from 'hippogriff';
import { rejectAfterBy } from '../index.js';

describe('resolveAfterBy', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = rejectAfterBy(20, function(first, last) {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-invalid-this
				assert.is(this, thing);

				return new Error(`${ first } ${ last }`);
			});
		}

		const start = Date.now();
		const thing = new Thing();

		return thing.do('John', 'Doe')
			.then(() => {
			})
			.catch((error) => {
				assert.equal(error.message, 'John Doe');
				assert.atLeast(Date.now() - start, 20);
			});
	});
});
