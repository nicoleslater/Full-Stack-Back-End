const express = require("express");

const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder
} = require("../queries/orders");

const { checkName, checkBoolean } = require("../validations/checkOrders.js");

const orders = express.Router();

orders.get(":/id", async (req, res) => {
    const { id } = req.params;
    const oneOrder = await getOneOrder(id)
    if(oneOrder){
        res.json(oneOrder)
    } else{
        res.status(404).json({ error: "Sorry that order is not found!"});
    }
});

orders.get("/", async (req, res) => {
    const allOrders = await getAllOrders();
    if(allOrders[0]){
        res.status(200)
        .json( { success: true, data: { payload: allOrders }});
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Error with the Server, please try again!"}});
    }
});

orders.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdOrder = await createOrder(req.body);
        res.json(createdOrder)
    } catch(error){
        res.status(400).json({ error: "Please go Back there is a server error!"});
    }
});

orders.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedOrder = await deleteOrder(id);
        if(deletedOrder){
            res.status(200).json({ success: true, payload: { data: deletedOrder }})
        } else {
            res.status(404).json("Sorry that order is not found!");
        }
    } catch(err){
        res.send(err)
    }
});

orders.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedOrder = await updateOrder(id, req.body);
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("NO Order found with that ID");
    }
});

module.exports = orders;