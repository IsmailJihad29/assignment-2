import { Request, Response } from "express";
import { ProductServices } from "./products.service";


const createProduct =async(req:Request, res: Response)=>{
 try{
  const {products: productData} = req.body
  console.log(req.body)
  const result = await ProductServices.createProductIntoDb(productData)

  res.status(200).json({
    success: true,
    message: "Product is created successfully",
    data: result,
  });
 }catch(error){
  console.log(error)
 }
}


export const ProductController ={
  createProduct
}