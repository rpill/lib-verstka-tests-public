"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleEmmet = void 0;
/**
 * Checks if the title of the given page matches a specific text
 * @async
 * @param {Page} page - Puppeteer page object representing the webpage.
 * @param {string} [text='Document'] - Text to compare with the webpage title.
 * @returns {Promise<Error | false>} - Promise that resolves to an Error object, false, or an object with an 'id' property if the title matches the specified text.
*/
const titleEmmet = async (page, text = 'Document') => {
    const title = await page.evaluate(() => document.title);
    if (title === text) {
        return {
            id: 'titleEmmet',
        };
    }
    return false;
};
exports.titleEmmet = titleEmmet;
//# sourceMappingURL=title-emmet.js.map