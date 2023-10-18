const Product = require("../models/product");
const mongoose = require("mongoose");

function getProducts(req, res) {
	Product.find({})
		.select("title price quantity _id")
		.then((products) => {
			if (products.length > 0) {
				res.json({
					method: "GET",
					url: "http://localhost:3000/products",
					products: products,
					message: "Products Retrieved Successfully !",
				});
			} else {
				res.status(404).json({ message: "No Products Yet " });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

// Add New Product
function storeProduct(req, res) {
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		price: req.body.price,
		quantity: req.body.quantity,
	});
	product
		.save()
		.then((product) => {
			console.log(product);
			res.status(201).json({
				method: "POST",
				url: "http://localhost:3000/products",
				product: product,
				message: "Product Saved Successfully ",
			});
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

//Show Single Product
function showProduct(req, res) {
	const id = req.params.id;
	Product.findById(id)
		.select("_id title quantity price")
		.then((product) => {
			if (product) {
				res.status(200).json({
					method: "GET",
					url: `http://localhost:3000/products/${id}`,
					product: product,
					message: "Product Retrieved Successfully !",
				});
			} else {
				res.status(404).json({ message: "Error 404 Product Not Found" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}
// Update Product
function updateProduct(req, res) {
	const id = req.params.id;
	Product.findByIdAndUpdate(id, { $set: req.body })
		.then((result) => {
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json({ message: "Product Not Found" });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

// Delete Product
function deleteProduct(req, res) {
	const id = req.params.id;
	Product.deleteOne({ _id: id })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.status(500).json({ error: err.message });
		});
}

module.exports = {
	getProducts,
	storeProduct,
	showProduct,
	updateProduct,
	deleteProduct,
};
