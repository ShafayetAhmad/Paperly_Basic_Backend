"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const config_1 = __importDefault(require("../app/config"));
const errorHandler = (err, req, res) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
        success: false,
        error: err.error || err,
        stack: config_1.default.node_env === "development" ? err.stack : undefined,
    });
};
exports.errorHandler = errorHandler;
