import { Schema, model } from 'mongoose';
import OrderInterface from './order.interface';

const orderSchema = new Schema<OrderInterface>({
  email: {
    type: String,
    required: [true, 'email is required']
  },
  productId: {
    type: String,
    required: [true, 'ProductId is required']
  },
  price: {
    type: Number,
    required: [true, 'price is required']
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required']
  }
});

export const Order = model<OrderInterface>('Order', orderSchema);
