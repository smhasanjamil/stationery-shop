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

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
};
