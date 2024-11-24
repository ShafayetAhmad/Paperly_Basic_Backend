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
exports.getRevenueService = exports.createOrderService = void 0;
const order_model_1 = require("./order.model");
const product_model_1 = require("../products/product.model");
const createOrderService = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product: productId, quantity, totalPrice } = orderData;
    if (!email || !productId || !quantity || !totalPrice) {
        throw new Error("Missing required fields");
    }
    const product = yield product_model_1.Product.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    if (product.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    product.quantity -= quantity;
    product.inStock = product.quantity > 0;
    yield product.save();
    const order = new order_model_1.Order({
        email,
        product: productId,
        quantity,
        totalPrice,
    });
    return yield order.save();
});
exports.createOrderService = createOrderService;
const getRevenueService = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const revenue = yield order_model_1.Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" },
            },
        },
    ]);
    return ((_a = revenue[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.getRevenueService = getRevenueService;
