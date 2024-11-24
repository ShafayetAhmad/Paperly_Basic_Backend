import app from "./app";
import express from "express";
import config from "./app/config";

import mongoose from "mongoose";
import productRoutes from "./app/modules/products/product.route";
import orderRoutes from "./app/modules/orders/order.route";
import { errorHandler } from "./middlewares/errorHandler";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`Paperly Backend listening on port ${config.port}`);
    });
    app.use("/api/products", productRoutes);
    app.use("/api/orders", orderRoutes);
    app.use(errorHandler);
  } catch (error) {
    console.log((error as Error).message);
  }
}

export const router = express.Router();

main();
