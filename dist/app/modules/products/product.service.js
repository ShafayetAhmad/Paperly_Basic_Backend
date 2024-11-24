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
exports.deleteProductService = exports.updateProductService = exports.getProductByIdService = exports.getAllProductsService = exports.createProductService = void 0;
const product_model_1 = require("./product.model");
const createProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_model_1.Product(productData);
    return yield product.save();
});
exports.createProductService = createProductService;
const getAllProductsService = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    if (searchTerm) {
        const searchRegex = new RegExp(searchTerm, "i");
        filter = {
            $or: [
                { name: searchRegex },
                { brand: searchRegex },
                { category: searchRegex },
            ],
        };
    }
    return yield product_model_1.Product.find(filter);
});
exports.getAllProductsService = getAllProductsService;
const getProductByIdService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findById(productId);
});
exports.getProductByIdService = getProductByIdService;
const updateProductService = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findByIdAndUpdate(productId, updateData, { new: true });
});
exports.updateProductService = updateProductService;
const deleteProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.Product.findByIdAndDelete(productId);
});
exports.deleteProductService = deleteProductService;
