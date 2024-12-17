"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patterns = void 0;
exports.match = match;
exports.patterns = ["/users", "/users/:id"];
function match(path, options) {
    return {
        ok: false,
    };
}
