/**
 * @name Installation
 * @summary
 *
 * ```
 * npm install async-agent
 * ```
 * _Requires Babel 7.2+_
 */

/**
 * @name Docs
 * @summary
 * - Function
 *   - [defer](docs/defer.md)
 *   - [delay](docs/delay.md)
 *   - [clear](docs/clear.md)
 *   - [wait](docs/wait.md)
 *   - [debounce](docs/debounce.md)
 *   - [throttle](docs/throttle.md)
 * - Iteration
 *   - [forRange](docs/forRange.md)
 * - Higher-order
 *   - [waitBy](docs/waitBy.md)
 *   - [rejectAfterBy](docs/rejectAfterBy.md)
 *   - [rejectAfterWith](docs/rejectAfterWith.md)
 *   - [rejectBy](docs/rejectBy.md)
 *   - [rejectWith](docs/rejectWith.md)
 *   - [resolveAfterBy](docs/resolveAfterBy.md)
 *   - [resolveAfterWith](docs/resolveAfterWith.md)
 *   - [resolveBy](docs/resolveBy.md)
 *   - [resolveWith](docs/resolveWith.md)
 */
export { default as defer } from './defer';
export { default as delay } from './delay';
export { default as clear } from './clear';
export { default as wait } from './wait';
export { default as forRange } from './forRange';
export { default as debounce } from './debounce';
export { default as throttle } from './throttle';

export { default as waitBy } from './waitBy';
export { default as rejectAfterBy } from './rejectAfterBy';
export { default as rejectAfterWith } from './rejectAfterWith';
export { default as rejectBy } from './rejectBy';
export { default as rejectWith } from './rejectWith';
export { default as resolveAfterBy } from './resolveAfterBy';
export { default as resolveAfterWith } from './resolveAfterWith';
export { default as resolveBy } from './resolveBy';
export { default as resolveWith } from './resolveWith';
