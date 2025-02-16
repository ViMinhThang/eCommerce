import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js';
import orderRoutes from "./routes/orderRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import userRoutes from "./routes/uploadRoutes.js"
dotenv.config()
connectDB()
const port = process.env.PORT || 5000;


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("API is running")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)


app.listen(port, () => console.log(`Server is running on port ${port}`))    