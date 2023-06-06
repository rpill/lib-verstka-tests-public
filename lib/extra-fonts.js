"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraFonts = void 0;
const fs_1 = __importDefault(require("fs"));
const csstree = __importStar(require("css-tree"));
/**
 * Check extra fonts from a CSS file.
 * @param {string} cssPath - Path to the CSS file.
 * @param {string[]} fonts - Array of font names to check against.
 * @returns {(Error | false)} - Object representing the extra fonts found, or false if no extra fonts are found.
*/
const extraFonts = (cssPath, fonts) => {
    const cssCode = fs_1.default.readFileSync(cssPath, 'utf-8');
    const ast = csstree.parse(cssCode);
    const fontsDeclarations = csstree.findAll(ast, (node) => node.type === 'Declaration' && node.property === 'font-family');
    const fontsProperties = fontsDeclarations.map((decl) => csstree.generate(decl));
    const extraFonts = fontsProperties.filter((property) => (!fonts.some((font) => property.includes(font))));
    if (extraFonts.length) {
        return {
            id: 'extraFonts',
            values: {
                fonts: fonts.join(', '),
            },
        };
    }
    return false;
};
exports.extraFonts = extraFonts;
//# sourceMappingURL=extra-fonts.js.map