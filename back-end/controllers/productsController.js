const express = require("express");

const {
    getAllProducts, 
    getOneProduct, 
    createProduct, 
    deleteProduct, 
    updateProduct
} = require("../queries/products.js");