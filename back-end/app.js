const express = require("express");
const cors = require("cors");

const app = express();

const usersController = require("./controllers/usersController");
const ordersController = require("./controllers/ordersController");
const productsController = require("./controllers/productsController");

app.use(cors());
app.use(express.json());


app.use("/users", usersController);
app.use("/orders", ordersController);
app.use("/products", productsController);


app.get("/", (req, res) => {
    res.send("Welcome to Lovely Nikki Soaps");
});

app.get("/users", (req, res) => {
    res.send("Welcome to User Profile");
});

app.get("/orders", (req, res) => {
    res.send("Welome to the Orders");
});

app.get("/products", (req, res) => {
    res.send("Welcome to the Products");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is NOT found!"}})
});

module.exports = app; 

