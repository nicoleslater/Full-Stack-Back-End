const express = require("express");

const orders = express.Router();

const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
} = require("../queries/orders");

const { checkName, checkBoolean } = require("../validations/checkOrders.js");

// Users
// Orders
// Products


orders.get(":/id", async (req, res) => {
    const { id } = req.params;
    const oneOrder = await getOneOrder(id)
        if(oneOrder){
            res.json(oneOrder)
            console.log(oneUser)
        } else {
        res.status(404).json({ error: "Sorry that Order is not Found!"});
        }
});

orders.get("/", async (req, res) => {
    const allOrders = await getAllOrders();
    if(allOrders[0]){
        console.log(allOrders)
        res.status(200).json({ success: true, data: { payload: allOrders } });
    } else{
        res.status(404).json({ success: false, data: { error: "Error with the Server please TRY again!" } });
    } 
});

orders.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdOrder = await createOrder(req.body);
        res.json(createdOrder)
        console.log(createdOrder)
    } catch(error){
        res.status(404).json({ error: "Please Return to the Controller!(Order) there is a server error!"});
    }
});

orders.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedOrder = await deleteOrder(id);
        console.log(deletedOrder)
        if(deletedOrder){
            res.status(200).json({ success: true, payload: { data: deletedOrder, } })
        } else {
            res.status(404).json("Sorry that ORDER is not found!");
        }
    } catch(err){
        res.send(err)
    }
});

orders.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedOrder = await updateOrder(id, req.body);
    console.log(updatedOrder)
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("Sorry there is NO Order found with that ID");
    }
});

module.exports = orders;