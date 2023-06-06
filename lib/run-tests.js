"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTests = void 0;
const fs_1 = __importDefault(require("fs"));
const i18next_1 = __importDefault(require("i18next"));
const deepmerge_1 = __importDefault(require("deepmerge"));
const ru_1 = __importDefault(require("./locales/ru"));
const runTests = async (options, check) => {
    await i18next_1.default.init((0, deepmerge_1.default)({
        resources: {
            ru: ru_1.default,
        },
    }, options.translation));
    try {
        const errors = await check(options.projectPath, options.translation.lng);
        if (errors.length) {
            const errorsText = errors.map((error, index) => `${index + 1}. ${i18next_1.default.t(error.id, error.values || {})}`).join('\r\n');
            fs_1.default.writeFileSync('./result.txt', errorsText);
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.runTests = runTests;
//# sourceMappingURL=run-tests.js.map