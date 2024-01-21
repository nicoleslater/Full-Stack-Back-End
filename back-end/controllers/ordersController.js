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

// orders.use("/:id/orders", usersController);

orders.get("/:id/orders", async (req, res) => {
    const { id } = req.params;
    const allOrders = await getAllOrders(id);

    if(allOrders[0]){
        res.status(200).json({ success: true, data: {payload: allOrders} });
    } else{
        res.status(404).json({ success: false, data: { error: "Error (Order Controller), please try again!"}});
    }
});


// Index 
orders.get("/:order_id", async (req, res) => {
   const { order_id } = req.params;
    const oneOrder = await getOneOrder(order_id);

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
        res.json(createdOrder);
    } catch(error){
        res.status(404).json( { success: false, data: { error: "NOOOOOOO!  Please go back to Order Controller!"}});
    }
});

// Delete
orders.delete("/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const deletedOrder = await deleteOrder(id);
        if (deletedOrder) {
            res.status(200).json({ success: true, data: { payload: deletedOrder } });
        } else {
            res.status(404).json({ success: false, data: { error: "Order not found" } });
        }
    } catch (err) {
        res.send(err)
    }
});

// Update
orders.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedOrder = await updateOrder( {id, ...req.body} );
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("NO Order found with that ID");
    }
});

module.exports = orders;