require("dotenv").config();

const http = require("http"),
	app = require("./app"),
	port = process.env.PORT || 5000;

http.createServer(app);

app.listen(port, () => console.log(`Server Running on :${port}`));
