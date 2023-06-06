import { Page } from 'puppeteer';
import { Error } from './types/global';
/**
 * Check if given language attribute exists on the page
 * @param {Page} page - Page object for puppeteer
 * @param {string} lang - Language code to search for
 * @returns {Promise<Error | false>} - Returns an error object with corresponding id and values if the language code does not exist, returns false if the language code exists
*/
export declare const lang: (page: Page, lang: string) => Promise<Error | false>;
