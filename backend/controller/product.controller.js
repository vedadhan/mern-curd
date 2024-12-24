import Product from "../models/product.js";
import mongoose from "mongoose";

export const getProductList = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: `error in fetching product ${error.message}` });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please fill all details." });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(200).json({ success: true, data: newProduct, message: "Product saved successfully." });
    } catch (error) {
        console.log("error in creating product", error.message);
        res.status(500).json({ success: false, message: "server error." });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Product item not found." });
        console.log("error", error.message);
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct, message: "Product updated successfully." });
    } catch (error) {
        res.status(404).json({ success: false, message: `error in fetching product ${error.message}` })
    }
}