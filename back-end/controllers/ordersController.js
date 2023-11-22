const express = require("express");

const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder
} = require("../queries/orders");

