import { z } from "zod";

const productValidationSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number().min(0, "Price must be a valid price"),
  category: z.enum([
    "Writing",
    "Office Supplies",
    "Art Supplies",
    "Educational",
    "Technology",
  ]),
  description: z.string(),
  quantity: z.number().min(0, "Enter a valid quantity"),
  inStock: z.boolean(),
});

export default productValidationSchema;
