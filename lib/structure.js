"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.structure = void 0;
const directory_tree_1 = __importDefault(require("directory-tree"));
const immutable_fs_trees_1 = require("./utils/immutable-fs-trees");
/**
 * Checks the project structure against an expected directory tree.
 * @param {string} source - Source directory path.
 * @param {DirectoryTree} expectedTree - Expected directory tree.
 * @returns {Error[]} - An array of errors found in the project structure.
 */
const structure = (source, expectedTree) => {
    const projectTree = (0, directory_tree_1.default)(source, { attributes: ['type'] });
    const search = (canonicalTree, actualTree) => {
        const errors = canonicalTree.reduce((acc, item) => {
            const found = actualTree.find(({ name, type }) => item.name === name && item.type === type);
            if (!found) {
                return [...acc, {
                        id: `structure.${item.type}`,
                        values: {
                            name: item.name,
                        },
                    }];
            }
            if ((0, immutable_fs_trees_1.isDirectory)(item) && found) {
                return [...acc, ...search(item.children || [], found.children || [])];
            }
            return acc;
        }, []);
        return errors;
    };
    return search(expectedTree.children || [], projectTree.children || []);
};
exports.structure = structure;
//# sourceMappingURL=structure.js.map