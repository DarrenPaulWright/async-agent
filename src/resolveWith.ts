/**
 * Returns a function that returns a Promise that resolves with provided args.
 */
export default <Value>(arg: Value) => {
	return (): Promise<Value> => Promise.resolve(arg);
};
