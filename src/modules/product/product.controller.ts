import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body.product;

    const result = await ProductServices.createProductIntoDB(payload);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
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

// get all product
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "Product are retrieved successfully",
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

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
