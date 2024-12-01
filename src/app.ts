import express, { Application } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/order/order.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req, res) => {
  res.send("Stationery Shop app running");
});

export default app;
