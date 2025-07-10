// import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import connectDB from './configs/db.js';
// import 'dotenv/config'
// import userRouter from './routes/userRoute.js';
// import sellerRouter from './routes/sellerRoute.js';
// import connectCloudinary from './configs/cloudinary.js';
// import ProductRouter from './routes/productRoute.js';
// import cartRouter from './routes/cartRoute.js';
// import addressRouter from './routes/addressRoute.js';
// import orderRouter from './routes/orderRoute.js';
// import { stripeWebhooks } from './controllers/orderController.js';
// const app = express();
// const port = process.env.PORT || 4000;
// await connectDB()
// await connectCloudinary()

// const allwedOrigins=['http://localhost:5173','https://greencart-frontend-page.onrender.com']
// app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({origin:allwedOrigins,credentials:true}));

// app.get('/', (req, res) => res.end("API is working"));
// app.use('/api/user',userRouter);
// app.use('/api/seller',sellerRouter);
// app.use('/api/product',ProductRouter);
// app.use('/api/cart',cartRouter);
// app.use('/api/address',addressRouter);
// app.use('/api/order',orderRouter);
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`)
// })
/*import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
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

// ✅ Connect to database and cloudinary
await connectDB();
await connectCloudinary();

// ✅ Allowed origins for frontend
const allowedOrigins = [
  'http://localhost:5173',
  'https://greencart-frontend-page.onrender.com',
];

// ✅ Stripe webhook route (must come BEFORE express.json)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow mobile apps, Postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// ✅ Optional: allow credentials in all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// ✅ Routes
app.get('/', (req, res) => res.end('API is working'));
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', ProductRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);

// ✅ Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
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

// ✅ CORS setup
const allowedOrigins = ['http://localhost:5173', 'https://greencart-frontend-page.onrender.com'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// ✅ Stripe webhook (must come BEFORE express.json())
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// ✅ JSON & cookie middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.get('/', (req, res) => res.end("API is working"));
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', ProductRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);

// ✅ Start server only after DB and Cloudinary connect
(async () => {
  try {
    await connectDB();
    console.log("✅ DB connected");

    await connectCloudinary();
    console.log("✅ Cloudinary connected");

    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Server startup error:", err.message);
    process.exit(1);
  }
})();

