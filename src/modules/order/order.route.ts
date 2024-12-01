import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

// create a new product
router.post("/", OrderControllers.createOrder);

export const OrderRoutes = router;
