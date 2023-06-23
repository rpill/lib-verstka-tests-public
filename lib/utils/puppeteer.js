"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchBrowser = exports.hasElementBySelectors = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const file_url_1 = require("./file-url");
const hasElementBySelectors = async (page, selectors) => {
    const result = await page.evaluate((slctrs) => (!!document.querySelector(slctrs)), selectors);
    return result;
};
exports.hasElementBySelectors = hasElementBySelectors;
const launchBrowser = async (htmlPath, options) => {
    const browser = await puppeteer_1.default.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true,
    });
    const page = await browser.newPage();
    if (options.viewport) {
        const { viewport: { height, width } } = options;
        await page.setViewport({
            height,
            width,
            deviceScaleFactor: 1,
        });
    }
    await page.goto((0, file_url_1.fileUrl)(htmlPath), { waitUntil: 'networkidle0' });
    await page.waitForTimeout(3000);
    return { browser, page };
};
exports.launchBrowser = launchBrowser;
//# sourceMappingURL=puppeteer.js.map