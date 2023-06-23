"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareLayout = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const compareImages_1 = __importDefault(require("resemblejs/compareImages"));
const puppeteer_1 = require("./utils/puppeteer");
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
    scaleToSameSize: false,
    ignore: 'antialiasing',
};
const dirOutputs = './outputs';
/**
 * Compares the layout of an HTML page with a canonical image.
 * @async
 * @param {string} htmlPath - Path to the HTML file.
 * @param {Options} options - Options for the comparison.
 * @returns {Promise<Error | false>} - A promise that resolves to an Error if the layout is different, or false if the layout is the same.
 * @param {Handler} handler - Handler object for additional actions.
*/
const compareLayout = async (htmlPath, options, handler) => {
    var _a, _b, _c;
    const { fullPage = true, canonicalImage = 'layout-canonical.jpg', pageImage = 'layout.jpg', outputImage = 'output.jpg', reqPercentage = 10, browserOptions, } = options;
    const tempName = (0, uuid_1.v4)();
    const htmlPathCopy = path_1.default.join(path_1.default.dirname(htmlPath), `${tempName}.html`);
    fs_1.default.copyFileSync(htmlPath, htmlPathCopy);
    fs_1.default.appendFileSync(htmlPathCopy, videoStopScript);
    const { browser, page } = await (0, puppeteer_1.launchBrowser)(htmlPathCopy, browserOptions);
    await ((_a = handler === null || handler === void 0 ? void 0 : handler.onBeforeScreenshot) === null || _a === void 0 ? void 0 : _a.call(handler, page));
    await page.screenshot({ path: pageImage, fullPage: !!fullPage });
    await browser.close();
    fs_1.default.unlinkSync(htmlPathCopy);
    const data = await (0, compareImages_1.default)(fs_1.default.readFileSync(canonicalImage), fs_1.default.readFileSync(pageImage), comparisonOptions);
    if (!fs_1.default.existsSync(dirOutputs)) {
        fs_1.default.mkdirSync(dirOutputs);
    }
    fs_1.default.writeFileSync(path_1.default.join(dirOutputs, outputImage), data.getBuffer ? (_b = data.getBuffer) === null || _b === void 0 ? void 0 : _b.call(data, true) : '');
    if (data.misMatchPercentage > reqPercentage) {
        return {
            id: 'layout',
            values: {
                width: (_c = browserOptions.viewport) === null || _c === void 0 ? void 0 : _c.width
            }
        };
    }
    return false;
};
exports.compareLayout = compareLayout;
//# sourceMappingURL=compare-layout.js.map