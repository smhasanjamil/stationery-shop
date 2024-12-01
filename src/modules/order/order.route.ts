import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// create a new product
router.post("/", OrderControllers.createOrder);

// Calculate revenue
router.get("/revenue", OrderControllers.calculateRevenue);

export const OrderRoutes = router;
