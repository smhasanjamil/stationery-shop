import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./order.validation";

// Create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body.product;

    // Validate request body with Zod schema
    const zodParsedData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    res.status(200).json({
      status: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      error,
      stack: (error as Error).stack || "No stack trace available",
    });
  }
};

// Calculate revenue
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenueAmount = await OrderServices.calculatingTotalRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue: revenueAmount,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error computing revenue",
      error,
      stack: (error as Error).stack || "No stack trace available",
    });
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};
