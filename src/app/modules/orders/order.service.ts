import { ProductsModel } from '../products/products.model';
import OrderInterface from './order.interface';
import { Order } from './order.model';
import OrderValidateSchema from './order.validate';

// create new order
const createNewOrder = async (orderData: OrderInterface) => {
  const session = await ProductsModel.startSession();

  const validatedData = OrderValidateSchema.parse(orderData);
  const { email, productId, quantity } = validatedData;

  const product = await ProductsModel.findById(productId);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  try {
    session.startTransaction();

    const price = product.price * quantity;
    const newOrder = new Order({
      email: email,
      productId: product._id,
      price: price,
      quantity: quantity
    });

    const quantityCount = product.inventory.quantity - quantity;
    product.inventory.quantity = quantityCount;
    await product.save();

    const order = await Order.create(newOrder);

    await session.commitTransaction();

    return { order };
  } catch (error) {
    await session.abortTransaction();

    throw error;
  } finally {
    session.endSession();
  }
};

// find all order
const getAllOrderFromDb = async () => {
  const result = await Order.find();

  return result;
};

// get order by email
const getOrderByEmailFromDb = async (email: string) => {
  const order = await Order.find({
    $or: [{ email: { $regex: email, $options: 'i' } }]
  });

  return order;
};

export const OrderServices = {
  createNewOrder,
  getAllOrderFromDb,
  getOrderByEmailFromDb
};
