import { Page } from 'puppeteer';
import { Error } from './types/global';
/**
 * Orders the stylesheets by checking their presence on the page.
 * @async
 * @param {Page} page - Page object representing the web page.
 * @param {string[]} hrefs - Array of href strings representing the stylesheets to check.
 * @returns {Promise<Error | false>} - Promise that resolves to an Error object if the stylesheets are not in the correct order, or false if they are in the correct order.
*/
export declare const orderStyles: (page: Page, hrefs: string[]) => Promise<Error | false>;
