import { Order } from "./order.model";
import { Product } from "../products/product.model";
import { IOrder } from "./order.interface";

export const createOrderService = async (orderData: IOrder) => {
  const { email, product: productId, quantity, totalPrice } = orderData;

  if (!email || !productId || !quantity || !totalPrice) {
    throw new Error("Missing required fields");
  }

  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  if (product.quantity < quantity) {
    throw new Error("Insufficient stock");
  }

  product.quantity -= quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  const order = new Order({
    email,
    product: productId,
    quantity,
    totalPrice,
  });

  return await order.save();
};

export const getRevenueService = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  return revenue[0]?.totalRevenue || 0;
};
