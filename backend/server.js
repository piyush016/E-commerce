import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

//Middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 5000;

connectDB();
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
