import express from 'express';
import { ProductController } from './products.controller';

const router = express.Router();

router.get('/', ProductController.searchProduct);
router.post('/', ProductController.createProduct); // product create router
router.get('/', ProductController.getAllProduct); // product get router
router.get('/:productId', ProductController.getSingleProduct); // single product get router
router.put('/:productId', ProductController.updateProduct); // single product update router
router.delete('/:productId', ProductController.deleteProduct); // single product delete router

export const ProductRoutes = router;
