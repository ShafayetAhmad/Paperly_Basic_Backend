import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const createProductService = async (productData: IProduct) => {
  const product = new Product(productData);
  return await product.save();
};

export const getAllProductsService = async (searchTerm?: string) => {
  let filter = {};
  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm, "i");
    filter = {
      $or: [
        { name: searchRegex },
        { brand: searchRegex },
        { category: searchRegex },
      ],
    };
  }
  return await Product.find(filter);
};

export const getProductByIdService = async (productId: string) => {
  return await Product.findById(productId);
};

export const updateProductService = async (
  productId: string,
  updateData: Partial<IProduct>
) => {
  return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};

export const deleteProductService = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};
