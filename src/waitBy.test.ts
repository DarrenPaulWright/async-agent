import { assert, describe, it } from 'hippogriff';
import { waitBy } from '../index.js';

describe('waitBy', () => {
	it('should set the context on resolve', () => {
		class Thing {
			do = waitBy(function(resolve, _reject, first, last) {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-invalid-this
				assert.is(this, thing);
				resolve(`${ first } ${ last }`);
			});
		}

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.is(name, 'John Doe');
		});
	});

	it('should set the context on reject', () => {
		class Thing {
			do = waitBy(function(_resolve, reject, first, last) {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define,@typescript-eslint/no-invalid-this
				assert.is(this, thing);
				reject(new Error(`${ first } ${ last }`));
			});
		}

		const thing = new Thing();

		return thing.do('John', 'Doe')
			.then(() => {
			})
			.catch((error) => {
				assert.equal(error.message, 'John Doe');
			});
	});
});
