import { Page } from 'puppeteer';
import { Error } from './types/global';
/**
 * Checks if the title of the given page matches a specific text
 * @async
 * @param {Page} page - Puppeteer page object representing the webpage.
 * @param {string} [text='Document'] - Text to compare with the webpage title.
 * @returns {Promise<Error | false>} - Promise that resolves to an Error object, false, or an object with an 'id' property if the title matches the specified text.
*/
export declare const titleEmmet: (page: Page, text?: string) => Promise<Error | false>;
