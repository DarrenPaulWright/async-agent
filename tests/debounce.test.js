import { assert } from 'type-enforcer';
import { debounce, wait } from '../index.js';

describe('debounce', () => {
	it('should call the callback after other code is done', () => {
		let testVar = 0;
		let self; // eslint-disable-line init-declarations
		let theseArgs; // eslint-disable-line init-declarations
		const debounced = debounce(function(...args) {
			testVar++;
			self = this;
			theseArgs = args;
		});

		debounced.call(debounced, 'test2', 'test3');

		assert.is(testVar, 0);

		return wait(1)
			.then(() => {
				assert.is(testVar, 1);
				assert.is(self, debounced);
				assert.equal(theseArgs, ['test2', 'test3']);
			});
	});

	it('should call the callback immediately if leading=true', () => {
		let testVar = 0;
		let self; // eslint-disable-line init-declarations
		let theseArgs; // eslint-disable-line init-declarations
		const debounced = debounce(function(...args) {
			testVar++;
			self = this;
			theseArgs = args;
		}, 0, {
			leading: true
		});

		debounced.call(debounced, 'test2', 'test3');

		assert.is(testVar, 1);
		assert.is(self, debounced);
		assert.equal(theseArgs, ['test2', 'test3']);

		return wait(1)
			.then(() => {
				assert.is(testVar, 1);
				assert.is(self, debounced);
				assert.equal(theseArgs, ['test2', 'test3']);
			});
	});

	it('should call the callback twice if called multiple times and leading=true', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 0, {
			leading: true
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 1);

		return wait(1)
			.then(() => {
				assert.is(testVar, 2);
			});
	});

	it('should call the callback once if called multiple times and trailing=false', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 0, {
			trailing: false
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 1);

		return wait(1)
			.then(() => {
				assert.is(testVar, 1);
			});
	});

	it('should respect duration', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 10, {
			leading: true
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 1);

		return wait(5)
			.then(() => {
				debounced();
				debounced();
				assert.is(testVar, 1);
				return wait(6);
			})
			.then(() => {
				assert.is(testVar, 1);
				return wait(5);
			})
			.then(() => {
				assert.is(testVar, 2);
			});
	});

	it('should not call the callback after clear is called', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 10, {
			leading: true
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 1);

		return wait(5)
			.then(() => {
				debounced();
				debounced();
				assert.is(testVar, 1);
				return wait(6);
			})
			.then(() => {
				assert.is(testVar, 1);
				debounced.clear();
				return wait(5);
			})
			.then(() => {
				assert.is(testVar, 1);
			});
	});

	it('should call the callback when flush is called', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 10, {
			leading: true
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 1);

		return wait(5)
			.then(() => {
				debounced();
				debounced();
				assert.is(testVar, 1);
				return wait(6);
			})
			.then(() => {
				assert.is(testVar, 1);
				debounced.flush();
				assert.is(testVar, 2);
				return wait(5);
			})
			.then(() => {
				assert.is(testVar, 2);
			});
	});

	it('should call the callback after maxWait time if it keeps getting called', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 10, {
			maxWait: 15
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 0);

		return wait(3)
			.then(() => {
				debounced();
				debounced();
				assert.is(testVar, 0);
				return wait(3);
			})
			.then(() => {
				debounced();
				debounced();
				assert.is(testVar, 0);
				return wait(9);
			})
			.then(() => {
				assert.is(testVar, 1);
			});
	});

	it('should not call the callback after maxWait time if the normal duration ends', () => {
		let testVar = 0;
		const debounced = debounce(() => {
			testVar++;
		}, 10, {
			maxWait: 15
		});

		debounced();
		debounced();
		debounced();
		debounced();

		assert.is(testVar, 0, 'before wait');

		const start = Date.now();

		return wait()
			.then(() => {
				assert.is(testVar, 0, 'after first wait');
				return wait(11 - (Date.now() - start));
			})
			.then(() => {
				assert.is(testVar, 1, 'after second wait');
				return wait(9);
			})
			.then(() => {
				assert.is(testVar, 1, 'after third wait');
			});
	});
});
