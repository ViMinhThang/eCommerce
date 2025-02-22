import express from "express"
import { getProduct, getProductById, getSuggestionProduct } from "../controllers/productController.js";


const router = express.Router();
router.route("/suggestion").get(getSuggestionProduct)
router.route("/:category").get(getProduct)
router.route("/sp/:id").get(getProductById)
export default router