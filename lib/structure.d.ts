import { DirectoryTree } from 'directory-tree';
import { Error } from './types/global';
/**
 * Checks the project structure against an expected directory tree.
 * @param {string} source - Source directory path.
 * @param {DirectoryTree} expectedTree - Expected directory tree.
 * @returns {Error[]} - An array of errors found in the project structure.
 */
export declare const structure: (source: string, expectedTree: DirectoryTree) => Error[];
