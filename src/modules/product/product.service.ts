import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// create a new student
const createProductIntoDB = async (payload: TProduct): Promise<TProduct> => {
  const resutl = await ProductModel.create(payload);
  return resutl;
};

export const ProductServices = {
  createProductIntoDB,
};
