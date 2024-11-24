import { z } from "zod";

export const orderSchema = z.object({
  email: z.string().email("Invalid email format"),
  product: z.string().regex(/^[a-f\d]{24}$/i, "Invalid product ID"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .positive("Quantity must be greater than zero"),
  totalPrice: z.number().positive("Total price must be greater than zero"),
});

export const validateOrder = (data: unknown) => orderSchema.parse(data);
