import { Page } from 'puppeteer';
import { Error } from './types/global';
/**
 * Checks if there is horizontal scroll on the page.
 * @async
 * @param {Page} page - Puppeteer Page object representing the page to check.ge
 * @returns {Promise<Error | false>} - A promise that resolves to an Error object if there is horizontal scroll, or false if there is no horizontal scroll.
 */
export declare const horizontalScroll: (page: Page) => Promise<Error | false>;
