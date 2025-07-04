import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import ProductRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';
const app = express();
const port = process.env.PORT || 4000;
await connectDB()
await connectCloudinary()

const allwedOrigins=['http://localhost:5173','https://greencart-frontend-page.onrender.com']
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allwedOrigins,credentials:true}));

app.get('/', (req, res) => res.end("API is working"));
app.use('/api/user',userRouter);
app.use('/api/seller',sellerRouter);
app.use('/api/product',ProductRouter);
app.use('/api/cart',cartRouter);
app.use('/api/address',addressRouter);
app.use('/api/order',orderRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
