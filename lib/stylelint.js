"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylelint = void 0;
const path_1 = __importDefault(require("path"));
const stylelint_1 = __importDefault(require("stylelint"));
const stylelint_config_1 = __importDefault(require("./config/stylelint.config"));
/**
 * Lints CSS files using stylelint.
 * @async
 * @param {string} source - Path to the source directory.
 * @param {object} [config=stylelintConfig] - Stylelint configuration object.
 * @returns {Promise<Error[]>} - A promise that resolves to an array of lint errors.
 */
const stylelint = async (source, config = stylelint_config_1.default) => {
    const response = await stylelint_1.default.lint({
        config: config,
        files: `${source.split(path_1.default.sep).join(path_1.default.posix.sep)}//**/*.css`,
    });
    return response.results.reduce((errorsAcc, result) => {
        const fileName = path_1.default.basename(result.source || '');
        const errors = result.warnings.map((warning) => ({
            id: `stylelint.${warning.rule}`,
            values: {
                fileName,
                line: warning.line,
                column: warning.column,
                text: warning.text,
            },
        }));
        return errorsAcc.concat(errors);
    }, []);
};
exports.stylelint = stylelint;
//# sourceMappingURL=stylelint.js.map