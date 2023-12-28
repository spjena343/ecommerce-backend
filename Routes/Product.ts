import express from "express"
import { addProductController, deleteProductController, getAllProductController, getProductController, updateProductController } from "../src/Controllers/ProductController";
const router = express.Router();
router.route("/product").post(addProductController);
router.route("/product/:id").get(getProductController);
router.route("/product").get(getAllProductController);
router.route("/product/:id").put(updateProductController);
router.route("/product/:id").delete(deleteProductController);

module.exports = router;
