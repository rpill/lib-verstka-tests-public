"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.horizontalScroll = void 0;
/**
 * Checks if there is horizontal scroll on the page.
 * @async
 * @param {Page} page - Puppeteer Page object representing the page to check.ge
 * @returns {Promise<Error | false>} - A promise that resolves to an Error object if there is horizontal scroll, or false if there is no horizontal scroll.
 */
const horizontalScroll = async (page) => {
    const diff = await page.evaluate(() => (window.innerWidth - document.body.clientWidth));
    if (diff !== 0) {
        return { id: 'horizontalScroll' };
    }
    return false;
};
exports.horizontalScroll = horizontalScroll;
//# sourceMappingURL=horizontal-scroll.js.map