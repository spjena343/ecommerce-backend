import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../Product/Product";
import { Request, Response } from "express";
export const addProductController = async (req: Request, res: Response) => {
  try {
    const { imageUrl, Brand, Name, price, gender, Description } = req.body;

    await addProduct({
      image_url: imageUrl,
      Brand,
      Name,
      price,
      gender,
      Description,
    });
    res.status(200).json({
      message: `product added successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
export const getProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productId = parseInt(id);
  const product = await getProduct(productId);
  if (product) {
    return res.status(200).json(product);
  } else {
    return res.status(404).json({
      message: "No Product Found",
    });
  }
};
export const getAllProductController = async (req: Request, res: Response) => {
  try {
    const allProducts = await getAllProduct();
    if (allProducts) {
      return res.status(200).json({
        products: allProducts,
      });
    } else {
      return res.status(200).json({
        products: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ProductId = parseInt(id);
    const { updatedProductData } = req.body;
    console.log(ProductId)
    console.log(updatedProductData)
    const updatedProduct = await updateProduct(ProductId, updatedProductData);
    
    if (updatedProduct) {
      return res.status(200).json({
        updatedProduct,
        message:"product updated"
      });
    } else {
      return res.status(404).json({
        message: "Product not found or invalid id",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);
    const resp = await deleteProduct(productId);

    if (resp ) {
      return res.status(200).json({
        resp,
        message: "Product Deleted",
      });
    } else {
      return res.status(404).json({
        message: "Product Not Found or invalid id ",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
