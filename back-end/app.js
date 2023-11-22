const express = require("express");
const cors = require("cors");

const app = express();

const productsController = require("./controllers/productsController");

app.use(cors());
app.use(express.json());

app.use("/products", productsController);


app.get("/", (req, res) => {
    res.send("Welcome to Lovely Nikki Soaps");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is NOT found!"}})
});

module.exports = app; 

