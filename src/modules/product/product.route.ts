import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// get single product
router.get("/:productId", ProductControllers.getSingleProduct);

// get all product
router.get("/", ProductControllers.getAllProducts);

// create a new product
router.post("/create-product", ProductControllers.createProduct);

// Update product
router.put("/:productId", ProductControllers.updateProduct);

// Delete product
router.delete("/:productId", ProductControllers.deleteProduct);

export const ProductRoutes = router;
