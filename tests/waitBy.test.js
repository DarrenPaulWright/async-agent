import { assert } from 'type-enforcer';
import { waitBy } from '../index.js';

describe('waitBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = waitBy(function(resolve, reject, first, last) {
				assert.is(this, thing);
				resolve(`${first} ${last}`);
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.is(name, 'John Doe');
		});
	});

	it('should set the context on reject', () => {
		const Thing = function() {
			this.do = waitBy(function(resolve, reject, first, last) {
				assert.is(this, thing);
				reject(`${first} ${last}`);
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').catch((error) => {
			assert.equal(error, 'John Doe');
		});
	});
});
