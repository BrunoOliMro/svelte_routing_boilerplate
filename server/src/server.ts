import express from "express";
import path from "path";
import "dotenv/config";

const app = express();

const PORT = process.env["PORT"];

// If you want to serve all build routes with paths as directories
// app.use(express.static("build"))

// If you want to serve html files separately defining their routes

app.use("/assets", express.static("build/assets"));

app.get("/", (_req, res) => {
	res.sendFile(path.resolve("./build/index.html"));
});

app.get("/login", (_req, res) => {
	res.sendFile(path.resolve("./build/routes/login/index.html"));
});

app.listen(PORT, () => {
	console.log(`Process running on port ${PORT}`);
});