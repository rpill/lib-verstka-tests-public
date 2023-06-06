import { Browser, Page, Viewport } from 'puppeteer';
export interface Options {
    viewport?: Viewport;
}
export interface LaunchResult {
    browser: Browser;
    page: Page;
}
