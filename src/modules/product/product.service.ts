import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// create a new product
const createProductIntoDB = async (payload: TProduct): Promise<TProduct> => {
  const resutl = await ProductModel.create(payload);
  return resutl;
};

// get all product
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// Update product
const updateProduct = async (id: string, data: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProduct,
};
