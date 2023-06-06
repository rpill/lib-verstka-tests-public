import { Error } from './types/global';
/**
 * Lints CSS files using stylelint.
 * @async
 * @param {string} source - Path to the source directory.
 * @param {object} [config=stylelintConfig] - Stylelint configuration object.
 * @returns {Promise<Error[]>} - A promise that resolves to an array of lint errors.
 */
export declare const stylelint: (source: string, config?: {
    rules: {
        'no-duplicate-selectors': boolean;
        'block-no-empty': boolean;
        'declaration-block-no-duplicate-properties': boolean;
        'block-opening-brace-space-before': string;
        'declaration-block-semicolon-newline-after': string;
        'block-opening-brace-newline-after': string;
        'block-closing-brace-newline-before': string;
    };
}) => Promise<Error[]>;
