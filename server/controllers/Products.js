import mongoose from "mongoose";
import Products from "../models/Products.js";
import { createError } from "../error.js";

export const addProducts = async (req, res, next) => {
  try {
    const productsData = req.body;

    if (!Array.isArray(productsData)) {
      return next(
        createError(400, "Invalid request. Expected an array of products")
      );
    }

    const createdproducts = [];

    for (const productInfo of productsData) {
      const { title, name, desc, img, price, sizes, category } = productInfo;

      const product = new Products({
        title,
        name,
        desc,
        img,
        price,
        sizes,
        category,
      });
      const createdproduct = await product.save();

      createdproducts.push(createdproduct);
    }

    return res
      .status(201)
      .json({ message: "Products added successfully", createdproducts });
  } catch (err) {
    next(err);
  }
};