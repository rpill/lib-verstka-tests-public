import { Error } from './types/global';
/**
 * Check extra fonts from a CSS file.
 * @param {string} cssPath - Path to the CSS file.
 * @param {string[]} fonts - Array of font names to check against.
 * @returns {(Error | false)} - Object representing the extra fonts found, or false if no extra fonts are found.
*/
export declare const extraFonts: (cssPath: string, fonts: string[]) => Error | false;
