import { Request, Response, NextFunction } from "express";
import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
} from "./product.service";
import { generateResponse } from "../../../utils/generateResponse";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await createProductService(req.body);
    res
      .status(201)
      .json(generateResponse("Product created successfully", true, product));
  } catch (err) {
    next(err);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { searchTerm } = req.query;
    const products = await getAllProductsService(searchTerm as string);
    res
      .status(200)
      .json(
        generateResponse("Products retrieved successfully", true, products)
      );
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const product = await getProductByIdService(productId);
    product
      ? res
          .status(200)
          .json(
            generateResponse("Product retrieved successfully", true, product)
          )
      : res.status(404).json(generateResponse("Product not found", false, {}));
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const updatedProduct = await updateProductService(productId, req.body);
    updatedProduct
      ? res
          .status(200)
          .json(
            generateResponse(
              "Product updated successfully",
              true,
              updatedProduct
            )
          )
      : res.status(404).json(generateResponse("Product not found", false, {}));
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await deleteProductService(productId);
    deletedProduct
      ? res
          .status(200)
          .json(generateResponse("Product deleted successfully", true, {}))
      : res.status(404).json(generateResponse("Product not found", false, {}));
  } catch (err) {
    next(err);
  }
};
