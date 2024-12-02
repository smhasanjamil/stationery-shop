import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    brand: {
      type: String,
      required: [true, "Brand name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a valid price"],
    },
    category: {
      type: String,
      enum: {
        values: [
          "Writing",
          "Office Supplies",
          "Art Supplies",
          "Educational",
          "Technology",
        ],
        message: "{VALUE} is not a valid category",
      },
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Enter a valid quantity"],
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const ProductModel = model<TProduct>("Product", productSchema);
