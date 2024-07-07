import { Request, Response } from 'express';
import { ProductServices } from './products.service';
import productsValidationSchema from './products.validation';

// controller for createing products data
const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productData } = req.body;

    const validateProductData = productsValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDb(validateProductData); // call createProductIntoDb from service function to create product service result
    res.status(200).json({
      success: true,
      message: 'Product Created successfully!',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err
    });
  }
};

// controller for get all products data
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDb(); // call getAllserviceFrobDb from service funtions to get all products service result
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err
    });
  }
};

// controller for find single data

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDb(productId); // call service funcion to get single data service result
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err
    });
  }
};

// update products by id

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const updatedProduct = productsValidationSchema.parse(data);
    const result = await ProductServices.updateProductFromDb(productId, updatedProduct);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err
    });
  }
};


// delecte product

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProductFromDb(productId);
    res.json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
