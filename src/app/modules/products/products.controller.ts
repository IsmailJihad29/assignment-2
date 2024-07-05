import { Request, Response } from "express";
import { ProductServices } from "./products.service";

// controller for createing products data
const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productData } = req.body;
    console.log(req.body);
    const result = await ProductServices.createProductIntoDb(productData); // call createProductIntoDb from service function to create product service result 

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// controller for get all products data
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDb(); // call getAllserviceFrobDb from service funtions to get all products service result
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// controller for find single data

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductFromDb(id); // call service funcion to get single data service result
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
