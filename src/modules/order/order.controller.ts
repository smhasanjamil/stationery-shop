import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData  = req.body.product;
    const result = await OrderServices.createOrderIntoDB(orderData );

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

export const OrderControllers = {
  createOrder,
};
