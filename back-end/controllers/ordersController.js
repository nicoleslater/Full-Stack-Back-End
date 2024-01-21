const express = require("express");

const orders = express.Router({ mergeParams: true });

// const { getOneUser } = require("../queries/users");

const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
} = require("../queries/orders");

const { checkName, checkBoolean } = require("../validations/checkOrders");


// Users
// Orders
// Products

orders.get("/", async (req, res) => {
    const allOrders = await getAllOrders();

    if(allOrders[0]){
        res.status(200).json({ success: true, data: {payload: allOrders} });
    } else{
        res.status(404).json({ success: false, data: { error: "Error (Order Controller), please try again!"}});
    }
});


// Index 
orders.get("/:id", async (req, res) => {
   const { id } = req.params;
    const oneOrder = await getOneOrder(id);

    if(oneOrder){
        res.json(oneOrder)
    } else{
            res.status(404).json({ error: "Sorry that Order ID does not exist! "});
    }
});


// Post
orders.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdOrder = await createOrder(req.body);
        req.json(createdOrder);
    } catch(err){
        res.status(404).json( { error: "NOOOOOOO!  Please go back to Order Controller!"});
    }
});

// Delete
orders.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedOrder = await deleteOrder(id);
        if(deletedOrder){
            res.status(200).json({ success: true, payload: { data: deletedOrder, } });
        } else {
            res.status(404).json("Sorry that ORDER is not found!");
        }
    } catch(err){
        res.send(err)
    }
});

// Update
orders.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedOrder = await updateOrder(id, req.body );
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("Sorry there is NO Order found with that ID");
    }
});

module.exports = orders;