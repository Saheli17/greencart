import express from 'express';
import { getAllUserOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';
import authUser from '../middlewares/authUser.js';
import authSeller from '../middlewares/authSeller.js';
const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/user', authUser, getUserOrders);
orderRouter.get('/seller', authSeller, getAllUserOrders);

export default orderRouter;
