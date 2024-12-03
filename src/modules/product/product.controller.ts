import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

// create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;


    // Validate payload with Zod schema
    const zodParsedData = productValidationSchema.parse(payload);

    const result = await ProductServices.createProductIntoDB(zodParsedData);

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

// update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await ProductServices.updateProduct(productId, body);

    res.status(200).json({
      status: true,
      message: "Update product successfully",
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

// Delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductServices.deleteProduct(productId);

    res.status(200).json({
      status: true,
      message: "Product deleted successfully",
      result: {},
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
  updateProduct,
  deleteProduct,
};
