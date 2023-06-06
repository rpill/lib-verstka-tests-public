"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareLayout = void 0;
const fs_1 = __importDefault(require("fs"));
const compareImages_1 = __importDefault(require("resemblejs/compareImages"));
const puppeteer_1 = __importDefault(require("./utils/puppeteer"));
const videoStopScript = `<script> 
  const videos = document.querySelectorAll('video'); 

  function stopAutoplay() { 
      videos.forEach((video) => { 
          video.pause(); 
          video.removeAttribute('autoplay'); 
      }); 
  } 

  videos.forEach((video) => { 
      video.addEventListener('canplaythrough', stopAutoplay, { once: true }); 
  }); 
</script>`;
const comparisonOptions = {
    output: {
        errorColor: {
            red: 255,
            green: 0,
            blue: 255,
        },
        errorType: 'movement',
        transparency: 0.3,
        largeImageThreshold: 0,
        useCrossOrigin: false,
    },
    scaleToSameSize: true,
    ignore: 'antialiasing',
};
const pageImage = 'layout.jpg';
const outputImage = 'output.jpg';
/**
 * Compares the layout of an HTML page with a canonical image.
 * @async
 * @param {string} htmlPath - Path to the HTML file.
 * @param {Options} options - Options for the comparison.
 * @returns {Promise<Error | false>} - A promise that resolves to an Error if the layout is different, or false if the layout is the same.
 * @param {Handler} handler - Handler object for additional actions.
*/
const compareLayout = async (htmlPath, options, handler) => {
    var _a, _b, _c, _d;
    fs_1.default.appendFileSync(htmlPath, videoStopScript);
    const { browser, page } = await (0, puppeteer_1.default)(htmlPath, options.browserOptions);
    await ((_a = handler.onBeforeScreenshot) === null || _a === void 0 ? void 0 : _a.call(handler, page));
    await page.screenshot({ path: pageImage });
    await browser.close();
    const canonicalImage = (_b = options.canonicalImage) !== null && _b !== void 0 ? _b : 'layout-canonical.jpg';
    const data = await (0, compareImages_1.default)(fs_1.default.readFileSync(canonicalImage), fs_1.default.readFileSync(pageImage), comparisonOptions);
    fs_1.default.writeFileSync(outputImage, data.getBuffer ? (_c = data.getBuffer) === null || _c === void 0 ? void 0 : _c.call(data, true) : '');
    const reqPercentage = (_d = options.reqPercentage) !== null && _d !== void 0 ? _d : 10;
    if (data.misMatchPercentage > reqPercentage) {
        return {
            id: 'layout',
        };
    }
    return false;
};
exports.compareLayout = compareLayout;
//# sourceMappingURL=compare-layout.js.map