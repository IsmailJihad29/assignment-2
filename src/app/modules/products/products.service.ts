import { ProductsDoc } from './products.interface';
import { ProductsModel } from './products.model';

// service to create products
const createProductIntoDb = async (product: ProductsDoc) => {
  const result = await ProductsModel.create(product);
  return result;
};

// service to get all products
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProductFromDb = async (searchTerm: any) => {
  if (!searchTerm) {
    const result = await ProductsModel.find();
    return result;
  } else {
    const result = await ProductsModel.find({
      name: { $regex: searchTerm, $options: 'i' }
    });
    return result;
  }
};

// service to get product by id
const getSingleProductFromDb = async (_id: string) => {
  const result = await ProductsModel.findOne({ _id });
  return result;
};

// service to update product by id

const updateProductFromDb = async (id: string, updatedProduct: ProductsDoc) => {
  const result = await ProductsModel.findByIdAndUpdate(
    id,
    { $set: { ...updatedProduct } },
    { new: true }
  );
  return result;
};

// service to delete product

const deleteProductFromDb = async (id: string) => {
  const result = await ProductsModel.findByIdAndDelete(id);
  return result;
};

// search products
const searchProductFromDB = async (searchTerm: string) => {
  const searchResult = await ProductsModel.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { description: { $regex: searchTerm, $options: 'i' } },
      { category: { $regex: searchTerm, $options: 'i' } },
      { tags: { $regex: searchTerm, $options: 'i' } }
    ]
  });
  return searchResult;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDb,
  getSingleProductFromDb,
  updateProductFromDb,
  deleteProductFromDb,
  searchProductFromDB
};
