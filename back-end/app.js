const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();

const usersController = require("./controllers/usersController.js");
const ordersController = require("./controllers/ordersController.js");
const productsController = require("./controllers/productsController.js");

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use("/users", usersController);
app.use("/orders", ordersController);
app.use("/products", productsController);


app.get("/", (req, res) => {
    res.send("Welcome to Lovely Nikki Skin Care Database");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is NOT found!"}})
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, data: { error: 'Internal Server Error' } });
});


module.exports = app; 

