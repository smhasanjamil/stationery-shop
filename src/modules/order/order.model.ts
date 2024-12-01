import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: [true, "Enter a email"],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Enter a valid product ID"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
      min: [0, "Total price must be a valid amount"],
    },
  },
  { timestamps: true }
);

export const OrderModel = model<TOrder>("Order", orderSchema);
