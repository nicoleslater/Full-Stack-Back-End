const express = require("express");

const orders = express.Router({ mergeParams: true });


const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
} = require("../queries/orders");

const { checkName, checkBoolean } = require("../validations/checkOrders");


orders.get("/:users/:user_id/orders", async (req, res) => {
    const { user_id } = req.params;
    const allOrders = await getAllOrders(user_id);

    if(allOrders[0]){
        res.status(200).json({ success: true, data: {payload: allOrders} });
    } else{
        res.status(404).json({ success: false, data: { error: "Error (Order Controller), please try again!"}});
    }
});


// Index 
orders.get("/:users/:user_id/orders/:order_id", async (req, res) => {
   const { user_id, order_id } = req.params;
    const oneOrder = await getOneOrder(user_id, order_id);

    if(oneOrder){
        res.json(oneOrder)
    } else{
            res.status(404).json({ error: "Sorry that Order ID does not exist! "});
    }
});


// Post
orders.post("/users/:user_id/orders", checkName, checkBoolean, async (req, res) => {
    const { user_id } = req.params;
    try{
        const createdOrder = await createOrder(user_id, req.body);
        res.status(200).json({ success: true, data: { payload: createdOrder }});
    } catch(err){
        res.status(404).json( { success: false, data: { error: "NOOOOOOO!  Please go back to Order Controller!"}});
    }
});

// Delete
orders.delete("/users/:user_id/orders/:order_id", async (req, res) => {
    const { user_id, order_id } = req.params;
    try {
        const deletedOrder = await deleteOrder(user_id, order_id);
        if (deletedOrder) {
            res.status(200).json({ success: true, data: { payload: deletedOrder } });
        } else {
            res.status(404).json({ success: false, data: { error: "Order not found" } });
        }
    } catch (err) {
        res.status(500).json({ success: false, data: { error: "Internal Server Error" } });
    }
});

// Update
orders.put("/users/:user_id/orders/:order_id", async (req, res) => {
    const { user_id, order_id } = req.params;
    try{
    const updatedOrder = await updateOrder(user_id, order_id, req.body );
    if (updatedOrder) {
        res.status(200).json({ success: true, data: { payload: updatedOrder } });
    } else {
        res.status(404).json({ success: false, data: { error: "Order not found" } });
    }
} catch (err) {
    res.status(500).json({ success: false, data: { error: "Internal Server Error" } });
}
});

module.exports = orders;