import rejectAfterWith from './rejectAfterWith.js';

/**
 * Returns a function that returns a Promise that rejects with provided args.
 */
export default (error: Error): () => Promise<void> => {
	return rejectAfterWith(0, error);
};
