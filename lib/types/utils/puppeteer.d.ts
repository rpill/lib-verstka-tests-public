import { Browser, Page, Viewport, PuppeteerLaunchOptions } from 'puppeteer';
export interface Options {
    viewport?: Viewport;
    launchOptions?: PuppeteerLaunchOptions;
}
export interface LaunchResult {
    browser: Browser;
    page: Page;
}
