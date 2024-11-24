"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrder = exports.orderSchema = void 0;
const zod_1 = require("zod");
exports.orderSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format"),
    product: zod_1.z.string().regex(/^[a-f\d]{24}$/i, "Invalid product ID"),
    quantity: zod_1.z
        .number()
        .int("Quantity must be an integer")
        .positive("Quantity must be greater than zero"),
    totalPrice: zod_1.z.number().positive("Total price must be greater than zero"),
});
const validateOrder = (data) => exports.orderSchema.parse(data);
exports.validateOrder = validateOrder;
