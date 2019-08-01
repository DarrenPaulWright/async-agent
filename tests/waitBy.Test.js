import { assert } from 'chai';
import { waitBy } from '../src/';

describe('waitBy', () => {
	it('should set the context on resolve', () => {
		const Thing = function() {
			this.do = waitBy(function(resolve, reject, first, last) {
				assert.equal(this, thing);
				resolve(`${first} ${last}`);
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').then((name) => {
			assert.equal(name, 'John Doe');
		});
	});

	it('should set the context on reject', () => {
		const Thing = function() {
			this.do = waitBy(function(resolve, reject, first, last) {
				assert.equal(this, thing);
				reject(`${first} ${last}`);
			});
		};

		const thing = new Thing();

		return thing.do('John', 'Doe').catch((name) => {
			assert.deepEqual(name, 'John Doe');
		});
	});
});
