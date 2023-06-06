import { Page } from 'puppeteer';
import { Options, LaunchResult } from '../types/utils/puppeteer';
export declare const hasElementBySelectors: (page: Page, selectors: string) => Promise<boolean>;
export declare const launchBrowser: (htmlPath: string, options: Options) => Promise<LaunchResult>;
