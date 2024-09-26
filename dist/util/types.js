"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConstrainedTypeAtLocation = getConstrainedTypeAtLocation;
/**
 * Resolves the given node's type. Will resolve to the type's generic constraint, if it has one.
 */
function getConstrainedTypeAtLocation(checker, node) {
    const nodeType = checker.getTypeAtLocation(node);
    const constrained = checker.getBaseConstraintOfType(nodeType);
    return constrained !== null && constrained !== void 0 ? constrained : nodeType;
}
//# sourceMappingURL=types.js.map