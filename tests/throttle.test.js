import { describe, it, assert } from 'hippogriff';
import { throttle, wait } from '../index.js';

describe('throttle', () => {
	it('should call the callback after other code is done if leading-false', () => {
		let totalCalls = 0;
		let self; // eslint-disable-line init-declarations
		let theseArgs; // eslint-disable-line init-declarations
		const throttled = throttle(function(...args) {
			totalCalls++;
			self = this;
			theseArgs = args;
		}, 0, {
			leading: false
		});

		throttled.call(throttled, 'test2', 'test3');

		assert.is(totalCalls, 0);

		return wait(1)
			.then(() => {
				assert.is(totalCalls, 1);
				assert.is(self, throttled);
				assert.equal(theseArgs, ['test2', 'test3']);
			});
	});

	it('should call the callback immediately if leading=true', () => {
		let totalCalls = 0;
		let self; // eslint-disable-line init-declarations
		let theseArgs; // eslint-disable-line init-declarations
		const throttled = throttle(function(...args) {
			totalCalls++;
			self = this;
			theseArgs = args;
		});

		throttled.call(throttled, 'test2', 'test3');

		assert.is(totalCalls, 1);
		assert.is(self, throttled);
		assert.equal(theseArgs, ['test2', 'test3']);

		return wait(1)
			.then(() => {
				assert.is(totalCalls, 1);
				assert.is(self, throttled);
				assert.equal(theseArgs, ['test2', 'test3']);
			});
	});

	it('should call the callback twice if called multiple times and leading=true', () => {
		let totalCalls = 0;
		const throttled = throttle(() => {
			totalCalls++;
		}, 0);

		throttled();
		throttled();
		throttled();
		throttled();

		assert.is(totalCalls, 1);

		return wait(1)
			.then(() => {
				assert.is(totalCalls, 2);
			});
	});

	it('should call the callback once if called multiple times and trailing=false', () => {
		let totalCalls = 0;
		const throttled = throttle(() => {
			totalCalls++;
		}, 0, {
			trailing: false
		});

		throttled();
		throttled();
		throttled();
		throttled();

		assert.is(totalCalls, 1);

		return wait(1)
			.then(() => {
				assert.is(totalCalls, 1);
			});
	});

	it('should respect duration', () => {
		let totalCalls = 0;
		const throttled = throttle(() => {
			totalCalls++;
		}, 10);

		throttled();
		throttled();
		throttled();
		throttled();

		assert.is(totalCalls, 1);

		return wait(5)
			.then(() => {
				throttled();
				throttled();
				assert.is(totalCalls, 1);
				return wait(6);
			})
			.then(() => {
				assert.is(totalCalls, 2);
				return wait(10);
			});
	});

	it('should not call the callback after clear is called', () => {
		let totalCalls = 0;
		const throttled = throttle(() => {
			totalCalls++;
		}, 10);

		throttled();
		throttled();
		throttled();
		throttled();

		assert.is(totalCalls, 1);

		return wait()
			.then(() => {
				throttled();
				throttled();
				assert.is(totalCalls, 1);
				return wait();
			})
			.then(() => {
				assert.is(totalCalls, 1);
				throttled.clear();
				return wait(11);
			})
			.then(() => {
				assert.is(totalCalls, 1);
			});
	});

	it('should call the callback when flush is called', () => {
		let totalCalls = 0;
		const throttled = throttle(() => {
			totalCalls++;
		}, 10, {
			leading: true
		});

		throttled();
		throttled();
		throttled();
		throttled();

		assert.is(totalCalls, 1);

		return wait()
			.then(() => {
				throttled();
				throttled();
				assert.is(totalCalls, 1);
				return wait();
			})
			.then(() => {
				assert.is(totalCalls, 1);
				throttled.flush();
				assert.is(totalCalls, 2);
				return wait(11);
			})
			.then(() => {
				assert.is(totalCalls, 2);
			});
	});
});
