import { ProductsDoc } from "./products.interface";
import { ProductsModel } from "./products.model";


// service to create products
const createProductIntoDb = async(product: ProductsDoc)=>{
  const result = await ProductsModel.create(product)

 return result
}


// service to get all products
const getAllProductFromDb=async()=>{
  const result = await ProductsModel.find()
  return result
}

// service to get product by id
const getSingleProductFromDb = async (id: string)=>{
  const result = await ProductsModel.findOne({id})
  return result
}

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDb,
  getSingleProductFromDb,
}