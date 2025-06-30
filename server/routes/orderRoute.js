import express from 'express';
import { getAllUserOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';
import authUser from '../middlewares/authUser.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/user', authUser, getUserOrders);
orderRouter.get('/seller', authUser, getAllUserOrders);

export default orderRouter;