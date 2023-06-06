"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStyles = void 0;
const puppeteer_1 = require("./utils/puppeteer");
/**
 * Orders the stylesheets by checking their presence on the page.
 * @async
 * @param {Page} page - Page object representing the web page.
 * @param {string[]} hrefs - Array of href strings representing the stylesheets to check.
 * @returns {Promise<Error | false>} - Promise that resolves to an Error object if the stylesheets are not in the correct order, or false if they are in the correct order.
*/
const orderStyles = async (page, hrefs) => {
    const selectors = hrefs.map((href) => `link[href*="${href}"]`).join(' ~ ');
    const isCorrect = await (0, puppeteer_1.hasElementBySelectors)(page, selectors);
    if (!isCorrect) {
        return {
            id: 'orderStyles',
        };
    }
    return false;
};
exports.orderStyles = orderStyles;
//# sourceMappingURL=order-styles.js.map