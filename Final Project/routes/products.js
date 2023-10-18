const express = require("express"),
	router = express.Router(),
	productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);
router.post("/", productController.storeProduct);
router.get("/:id", productController.showProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
