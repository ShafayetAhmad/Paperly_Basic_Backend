"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequests_1 = require("../../../middlewares/validateRequests");
const product_validation_1 = require("./product.validation");
const productRoutes = express_1.default.Router();
productRoutes.post("/", (0, validateRequests_1.validate)(product_validation_1.productSchema), product_controller_1.createProduct);
productRoutes.get("/", product_controller_1.getAllProducts);
productRoutes.get("/:productId", product_controller_1.getProductById);
productRoutes.put("/:productId", product_controller_1.updateProduct);
productRoutes.delete("/:productId", product_controller_1.deleteProduct);
exports.default = productRoutes;
