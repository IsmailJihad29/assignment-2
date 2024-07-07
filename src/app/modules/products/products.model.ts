import { model, Schema } from "mongoose";
import { Inventory, ProductsDoc, Variant } from "./products.interface";

const variantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: [true, "Variant type is missing Use a variant type"],
  },
  value: {
    type: String,
    required: [true, "Variant value is missing add a variant value"],
  },
});
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, "Quantity is missing add a quantity "],
  },
  inStock: {
    type: Boolean,
    required: [true, "Please add your product in stock or not "],
  },
});

const productSchema = new Schema<ProductsDoc>({
  name: { type: String, required: [true, "Name is missing Add product name"] },
  description: {
    type: String,
    required: [true, "Description is missing add product description"],
  },
  price: {
    type: Number,
    required: [true, "Price is missing add product price"],
  },
  category: {
    type: String,
    required: [true, " Category is missing add product category"],
  },
  tags: [
    {
      type: String,
      required: [true, "Product tag is missing please add atleast one tag"],
    },
  ],
  variants: {
    type: [variantSchema],
    required: [true, "Product variant is missing add product variant"],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "Product stock is missing add product stock"],
  },
});

export const ProductsModel = model<ProductsDoc>("Products", productSchema);
