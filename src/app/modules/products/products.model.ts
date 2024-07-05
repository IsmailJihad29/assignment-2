import { model, Schema } from "mongoose";
import { Inventory, ProductsDoc, Variant } from "./products.interface";

const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productsSchema = new Schema<ProductsDoc>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: variantSchema,
  inventory: inventorySchema,
});

export const ProductsModel = model<ProductsDoc>('Products', productsSchema)