import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

// create a new product
router.post("/create-product", ProductControllers.createProduct);
// get all product
router.get("/", ProductControllers.getAllProducts);

export const ProductRoutes = router;
