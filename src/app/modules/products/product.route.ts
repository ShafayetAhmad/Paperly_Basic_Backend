import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./product.controller";
import { validate } from "../../../middlewares/validateRequests";
import { productSchema } from "./product.validation";

const productRoutes = express.Router();

productRoutes.post("/", validate(productSchema), createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:productId", getProductById);
productRoutes.put(
  "/:productId",
  updateProduct
);
productRoutes.delete("/:productId", deleteProduct);

export default productRoutes;
