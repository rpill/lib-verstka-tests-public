import { Page } from 'puppeteer';
import { Options as BrowserOptions } from './utils/puppeteer';
export interface Options {
    browserOptions: BrowserOptions;
    canonicalImage?: string;
    reqPercentage?: number;
}
type BeforeScreenshotHandler = (page: Page) => Promise<void>;
export interface Handler {
    onBeforeScreenshot?: BeforeScreenshotHandler | null;
}
export {};
