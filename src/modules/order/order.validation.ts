import { Types } from "mongoose";
import { z } from "zod";

const orderValidationSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Enter an email"),
  product: z.custom<Types.ObjectId>((val) => Types.ObjectId.isValid(val), {
    message: "Enter a valid product ID",
  }),

  quantity: z.number().min(1, "Quantity must be at least 1"),
  totalPrice: z.number().min(0, "Total price must be a valid amount"),
});

export default orderValidationSchema;
