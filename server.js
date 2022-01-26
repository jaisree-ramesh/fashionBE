import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "./models/colors.js";
import patterns from "./models/patterns.js";
import categories from "./models/categories.js";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then((e) => console.log("Database connected"))
	.catch((e) => console.log("error", e));

app.get("/colors", (req, res) => {
	colors.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/patterns", (req, res) => {
	patterns.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.get("/categories", (req, res) => {
	categories.find({})
		.then((result) => res.send(result))
		.catch((e) => res.send(e.message));
});

app.listen(process.env.PORT || 5000, () =>
	console.log(`Server running on port ${port}`)
);

