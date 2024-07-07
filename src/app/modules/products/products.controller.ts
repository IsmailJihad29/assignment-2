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
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.getAllProductFromDb(searchTerm);
    res.json({
      success: true,
      message: 'Products fetched successfully!',
      date: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong!!',
      date: err
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
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err
    });
  }
};

// const searchProduct = async (req: Request, res: Response) => {
//   const { searchTerm } = req.query;

//   if (!searchTerm || typeof searchTerm !== 'string') {
//     return res
//       .status(400)
//       .json({ success: false, message: 'Invalid or missing search term' });
//   }

//   try {
//     const products = await ProductsModel.find({
//       $or: [
//         { name: { $regex: searchTerm, $options: 'i' } },
//         { description: { $regex: searchTerm, $options: 'i' } },
//         { category: { $regex: searchTerm, $options: 'i' } },
//         { tags: { $regex: searchTerm, $options: 'i' } }
//       ]
//     });

//     if (products.length === 0) {
//       return res
//         .status(404)
//         .json({ success: false, message: 'No products found matching the search term' });
//     }

//     res
//       .status(200)
//       .json({
//         success: true,
//         message: `Products matching search term '${searchTerm}' fetched successfully!`,
//         data: products
//       });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// };

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
