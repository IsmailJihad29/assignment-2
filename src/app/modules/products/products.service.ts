import { ProductsDoc } from "./products.interface";
import { ProductsModel } from "./products.model";

const createProductIntoDb = async(product: ProductsDoc)=>{
  const result = await ProductsModel.create(product)

 return result
}

export const ProductServices = {
  createProductIntoDb
}
