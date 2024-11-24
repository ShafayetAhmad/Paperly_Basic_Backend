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
exports.getRevenue = exports.createOrder = void 0;
const order_service_1 = require("./order.service");
const generateResponse_1 = require("../../../utils/generateResponse");
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield (0, order_service_1.createOrderService)(req.body);
        res
            .status(201)
            .json((0, generateResponse_1.generateResponse)("Order created successfully", true, order));
    }
    catch (err) {
        next(err);
    }
});
exports.createOrder = createOrder;
const getRevenue = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield (0, order_service_1.getRevenueService)();
        res.status(200).json((0, generateResponse_1.generateResponse)("Revenue calculated successfully", true, {
            totalRevenue,
        }));
    }
    catch (err) {
        next(err);
    }
});
exports.getRevenue = getRevenue;
