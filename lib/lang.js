"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lang = void 0;
const puppeteer_1 = require("./utils/puppeteer");
/**
 * Check if given language attribute exists on the page
 * @param {Page} page - Page object for puppeteer
 * @param {string} lang - Language code to search for
 * @returns {Promise<Error | false>} - Returns an error object with corresponding id and values if the language code does not exist, returns false if the language code exists
*/
const lang = async (page, lang) => {
    const isFound = await (0, puppeteer_1.hasElementBySelectors)(page, `html[lang*=${lang}]`);
    if (!isFound) {
        return {
            id: 'lang',
            values: {
                lang,
            },
        };
    }
    return false;
};
exports.lang = lang;
//# sourceMappingURL=lang.js.map