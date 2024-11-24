"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResponse = void 0;
const generateResponse = (message, success, data = {}) => ({
    message,
    success,
    data,
});
exports.generateResponse = generateResponse;
