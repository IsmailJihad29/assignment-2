import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// create new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createNewOrder(orderData);

    res.status(200).send({
      success: true,
      message: 'Order created successfully!',
      data: result.order
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Internal server error',
      data: error
    });
  }
};

//get all order
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromDb();

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      data: error
    });
  }
};

// get order by email
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const queryEmail = email as string;
    const result = await OrderServices.getOrderByEmailFromDb(queryEmail);

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully for user email!',
      data: result
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Internal server error',
      data: error
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
  getOrderByEmail
};
