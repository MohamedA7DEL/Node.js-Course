const express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	productsRouter = require("./routes/products");

(() => {
	mongoose.connect(process.env.DB_URI);
	mongoose.set("strictQuery", true);
	const db = mongoose.connection;
	db.once("open", () => console.log("Db Connected successfully"));
	db.on("error", () => console.error("Connection Failed "));
})();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/products", productsRouter);

app.use((req, res, next) => {
	const error = new Error(
		"Request not found .. something wrong .. Try Again Later"
	);
	error.status = 404;
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		errorMessage: {
			message: error.message,
			status: error.status,
		},
	});
});

app.use((req, res, next) => {
	res.status(200).json({
		message: "Server Running Successfully ",
	});
	next();
});

module.exports = app;
