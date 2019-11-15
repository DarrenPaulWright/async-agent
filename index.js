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
export { default as defer } from './src/defer';
export { default as delay } from './src/delay';
export { default as clear } from './src/clear';
export { default as wait } from './src/wait';
export { default as forRange } from './src/forRange';
export { default as debounce } from './src/debounce';
export { default as throttle } from './src/throttle';

export { default as waitBy } from './src/waitBy';
export { default as rejectAfterBy } from './src/rejectAfterBy';
export { default as rejectAfterWith } from './src/rejectAfterWith';
export { default as rejectBy } from './src/rejectBy';
export { default as rejectWith } from './src/rejectWith';
export { default as resolveAfterBy } from './src/resolveAfterBy';
export { default as resolveAfterWith } from './src/resolveAfterWith';
export { default as resolveBy } from './src/resolveBy';
export { default as resolveWith } from './src/resolveWith';
