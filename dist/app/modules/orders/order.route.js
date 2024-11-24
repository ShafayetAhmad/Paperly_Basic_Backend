"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const validateRequests_1 = require("../../../middlewares/validateRequests");
const order_validation_1 = require("./order.validation");
const orderRoutes = express_1.default.Router();
orderRoutes.post("/", (0, validateRequests_1.validate)(order_validation_1.orderSchema), order_controller_1.createOrder);
orderRoutes.get("/revenue", order_controller_1.getRevenue);
exports.default = orderRoutes;
