import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    //   const product = req.body.product;
    //   const result = await ProductServices.createProductIntoDB(product);

    const payload = req.body.product;

    const result = await ProductServices.createProductIntoDB(payload);

    // send response
    // res.json({
    //     status: true,
    //     message: 'Product created successfully',
    //     data: result,
    //   })
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

export const ProductControllers = {
  createProduct,
};
