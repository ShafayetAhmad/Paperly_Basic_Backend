"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_service_1 = require("./product.service");
const generateResponse_1 = require("../../../utils/generateResponse");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.createProductService)(req.body);
        res
            .status(201)
            .json((0, generateResponse_1.generateResponse)("Product created successfully", true, product));
    }
    catch (err) {
        next(err);
    }
});
exports.createProduct = createProduct;
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const products = yield (0, product_service_1.getAllProductsService)(searchTerm);
        res
            .status(200)
            .json((0, generateResponse_1.generateResponse)("Products retrieved successfully", true, products));
    }
    catch (err) {
        next(err);
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = yield (0, product_service_1.getProductByIdService)(productId);
        if (product) {
            res
                .status(200)
                .json((0, generateResponse_1.generateResponse)("Product retrieved successfully", true, product));
        }
        else {
            res.status(404).json((0, generateResponse_1.generateResponse)("Product not found", false, {}));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getProductById = getProductById;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedProduct = yield (0, product_service_1.updateProductService)(productId, req.body);
        if (updatedProduct) {
            res
                .status(200)
                .json((0, generateResponse_1.generateResponse)("Product updated successfully", true, updatedProduct));
        }
        else {
            res.status(404).json((0, generateResponse_1.generateResponse)("Product not found", false, {}));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const deletedProduct = yield (0, product_service_1.deleteProductService)(productId);
        if (deletedProduct) {
            res
                .status(200)
                .json((0, generateResponse_1.generateResponse)("Product deleted successfully", true, {}));
        }
        else {
            res.status(404).json((0, generateResponse_1.generateResponse)("Product not found", false, {}));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProduct = deleteProduct;
