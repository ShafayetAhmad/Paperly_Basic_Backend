"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, "Product name is required")
        .max(100, "Product name must be less than 100 characters"),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().positive("Price must be a positive number"),
    quantity: zod_1.z
        .number()
        .int("Quantity must be an integer")
        .nonnegative("Quantity cannot be negative"),
    inStock: zod_1.z.boolean().optional(),
    category: zod_1.z
        .string()
        .min(1, "Category is required")
        .max(50, "Category must be less than 50 characters"),
    brand: zod_1.z.string().optional(),
});
const validateProduct = (data) => exports.productSchema.parse(data);
exports.validateProduct = validateProduct;
