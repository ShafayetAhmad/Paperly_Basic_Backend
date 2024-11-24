import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required")
    .max(100, "Product name must be less than 100 characters"),
  description: z.string().optional(),
  price: z.number().positive("Price must be a positive number"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative"),
  inStock: z.boolean().optional(),
  category: z
    .string()
    .min(1, "Category is required")
    .max(50, "Category must be less than 50 characters"),
  brand: z.string().optional(),
});

export const validateProduct = (data: unknown) => productSchema.parse(data);
