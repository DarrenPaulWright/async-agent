import { assert } from 'type-enforcer';
import { forRange } from '../index.js';

describe('forRange', () => {
	it('should call the callback for each item in the range', () => {
		let testVar = [];
		return forRange(3, 10, (index) => new Promise((resolve) => {
			testVar.push(index);
			resolve();
		}))
			.then(() => {
				assert.equal(testVar, [3, 4, 5, 6, 7, 8, 9, 10]);
			});
	});

	it('should count down if the first number is higher', () => {
		let testVar = [];
		return forRange(10, 3, (index) => new Promise((resolve) => {
			testVar.push(index);
			resolve();
		}))
			.then(() => {
				assert.equal(testVar, [10, 9, 8, 7, 6, 5, 4, 3]);
			});
	});

	it('should cancel future callbacks if reject is called', () => {
		let testVar = [];
		return forRange(3, 10, (index) => new Promise((resolve, reject) => {
			testVar.push(index);
			if (index === 7) {
				reject();
			}
			else {
				resolve();
			}
		}))
			.then(() => {
				assert.equal(testVar, [3, 4, 5, 6, 7]);
			});
	});

	it('should cancel future callbacks if reject is called', () => {
		let testVar = [];
		return forRange(10, 3, (index) => new Promise((resolve, reject) => {
			testVar.push(index);
			if (index === 7) {
				reject();
			}
			else {
				resolve();
			}
		}))
			.then(() => {
				assert.equal(testVar, [10, 9, 8, 7]);
			});
	});
});
