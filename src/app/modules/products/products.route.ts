import express from "express";
import { ProductController } from "./products.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSingleProduct);

export const ProductRoutes = router;
