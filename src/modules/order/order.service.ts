import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

// create a new product
const createOrderIntoDB = async (orderData: TOrder): Promise<TOrder> => {
  const { email, product, quantity, totalPrice } = orderData;

  // Check if product exists or not
  const orderedItem = await ProductModel.findById(product);
  if (!orderedItem) {
    throw new Error("Product not found in DB");
  }

  // Check if there is enough stock in DB
  if (orderedItem.quantity < quantity) {
    throw new Error("Insufficient stock in DB");
  }

  // Create the order
  const createOrder = new OrderModel({
    email,
    product,
    quantity,
    totalPrice,
  });

  // Reduce product quantity and update inStock in DB
  orderedItem.quantity -= quantity;
  if (orderedItem.quantity === 0) {
    orderedItem.inStock = false;
  }

  // Save the updated product and the new order in DB
  await orderedItem.save();
  const savedOrder = await createOrder.save();

  return savedOrder;
};

export const OrderServices = {
  createOrderIntoDB,
};
