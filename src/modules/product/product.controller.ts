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

// get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product is retrieved successfully",
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
  getSingleProduct,
};
