import express from 'express';
import { getProductList, createProduct, deleteProduct, updateProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProductList);

router.post('/', createProduct);

router.delete("/:id", deleteProduct);

router.put('/:id', updateProduct);

export default router;