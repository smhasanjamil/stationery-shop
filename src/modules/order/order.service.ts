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

// Total Revenue calculation
const calculatingTotalRevenue = async () => {
  try {
    const revenueResult = await OrderModel.aggregate([
      {
        $project: {
          revenue: { $multiply: ["$quantity", "$totalPrice"] },
          _id: 0,
        },
      },
      {
        $group: {
          totalRevenue: { $sum: "$revenue" },
          _id: null,
        },
      },
      {
        $project: {
          totalRevenue: 1,
          _id: 0,
        },
      },
    ]);

    const totalRevenue =
      revenueResult.length > 0 ? revenueResult[0].totalRevenue : 0;
    return parseFloat(totalRevenue.toFixed(2));
  } catch (error) {
    throw new Error("Error in colculating revenue: " + error);
  }
};

export const OrderServices = {
  createOrderIntoDB,
  calculatingTotalRevenue,
};
