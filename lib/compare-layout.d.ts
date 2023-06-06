import { Error } from './types/global';
import { Options, Handler } from './types/compare-layout';
/**
 * Compares the layout of an HTML page with a canonical image.
 * @async
 * @param {string} htmlPath - Path to the HTML file.
 * @param {Options} options - Options for the comparison.
 * @returns {Promise<Error | false>} - A promise that resolves to an Error if the layout is different, or false if the layout is the same.
 * @param {Handler} handler - Handler object for additional actions.
*/
export declare const compareLayout: (htmlPath: string, options: Options, handler: Handler) => Promise<Error | false>;
