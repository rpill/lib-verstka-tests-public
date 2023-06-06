"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.reduce = exports.map = exports.isDirectory = exports.isFile = exports.getName = exports.getChildren = exports.mkdir = exports.mkfile = void 0;
const mkfile = (name) => ({
    name,
    type: 'file',
    path: '',
    size: 0,
    custom: {}
});
exports.mkfile = mkfile;
const mkdir = (name, children = []) => ({
    name,
    children,
    type: 'directory',
    path: '',
    size: 0,
    custom: {}
});
exports.mkdir = mkdir;
const getChildren = (directory) => directory.children;
exports.getChildren = getChildren;
const getName = (node) => node.name;
exports.getName = getName;
const isFile = (node) => node.type === 'file';
exports.isFile = isFile;
const isDirectory = (node) => node.type === 'directory';
exports.isDirectory = isDirectory;
const map = (callbackFn, tree) => {
    var _a;
    const updatedNode = callbackFn(tree);
    return (0, exports.isDirectory)(tree)
        ? { ...updatedNode, children: (_a = tree.children) === null || _a === void 0 ? void 0 : _a.map((n) => (0, exports.map)(callbackFn, n)) }
        : updatedNode;
};
exports.map = map;
const reduce = (callbackFn, tree, acc) => {
    var _a;
    const newAcc = callbackFn(acc, tree);
    if ((0, exports.isFile)(tree)) {
        return newAcc;
    }
    return ((_a = tree.children) === null || _a === void 0 ? void 0 : _a.reduce((iAcc, n) => (0, exports.reduce)(callbackFn, n, iAcc), newAcc)) || newAcc;
};
exports.reduce = reduce;
const filter = (callbackFn, tree) => {
    var _a;
    if (!callbackFn(tree)) {
        return null;
    }
    return (0, exports.isDirectory)(tree)
        ? { ...tree, children: (_a = tree.children) === null || _a === void 0 ? void 0 : _a.map((n) => (0, exports.filter)(callbackFn, n)).filter((v) => v) }
        : tree;
};
exports.filter = filter;
//# sourceMappingURL=immutable-fs-trees.js.map