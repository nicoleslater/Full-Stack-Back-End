const express = require("express");

const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
} = require("../queries/orders");

const { checkName, checkBoolean } = require("../validations/checkOrders");

const orders = express.Router();

// Users
// Orders
// Products

// Index 
orders.get("/:id", async (req, res) => {
   const { id } = req.params;
   const oneOrder = await getOneOrder(id)
    if(oneOrder){
    // const allOrders = await getAllOrders(user_id);
    res.json(oneOrder)
   } else{
    res.status(404).json({ error: "Sorry That Order is not Available!"});
   }
});

//  Show
orders.get("/", async (req, res) => {
    const allOrders = await getAllOrders();
   if(allOrders[0]){
    res.status(200).json({ success: true, data: { payload: allOrders } });
} else{
    res.status(404).json({ success: false, data: { error: "Error (Order Controller) with the Server, please try again!" } });
}
});

// Post
orders.post("/", checkName, checkBoolean,  async (req, res) => {
    try{
        const createdOrder = await createOrder(req.body);
        res.json(createdOrder)
    } catch(error){
        res.status(404).json({ error: "Please Return to the Controller!(Order) there is a server error!"});
    }
});

// Delete
orders.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedOrder = await deleteOrder(id);
        if(deletedOrder){
            res.status(200).json({ success: true, payload: { data: deletedOrder }, });
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
    const updatedOrder = await updateOrder(id, req.body);
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("Sorry there is NO Order found with that ID");
    }
});

module.exports = orders;