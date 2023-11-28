const express = require("express");
const orders = express.Router({ mergeParams: true });
const { getOneUser } = require("../queries/users.js");
const {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
} = require("../queries/orders");




// orders.use("/:user_id/orders", usersController);
// Users
// Orders
// Products
orders.get("/", async (req, res) => {
   const { user_id } = req.params;
   try{
    const user = await getOneUser(user_id);
    const allOrders = await getAllOrders(user_id);
    res.json({ ...user, allOrders });
   } catch(err){
    res.json(err);
   }
});

orders.get(":/order_id", async (req, res) => {
    const { order_id, user_id } = req.params;
    try{
        const order = await getOneOrder(order_id);
        const user = await getOneUser(user_id);
        if(order.id){
            res.json({ ...user, order });
        }
    } catch(err){
        res.json(err);
    }
});

orders.post("/", async (req, res) => {
    try{
        const { user_id } = req.params;
        const createdOrder = await createOrder(user_id, req.body)
        res.json(createdOrder);
        // console.log(createdOrder)
    } catch(err){
        res.status(404).json({ error: "Please Return to the Controller!(Order) there is a server error!"});
    }
});

orders.delete("/:order_id", async (req, res) => {
    try{
        const { order_id } = req.params;
        const deletedOrder = await deleteOrder(order_id);
        // console.log(deletedOrder)
        if(deletedOrder){
            res.status(200).json({ success: true, payload: { data: deletedOrder }, });
        } else {
            res.status(404).json("Sorry that ORDER is not found!");
        }
    } catch(err){
        res.send(err)
    }
});

orders.put("/:id", async (req, res) => {
    const { id, user_id } = req.params;
    const updatedOrder = await updateOrder( {user_id, id, ...req.body} );
    // console.log(updatedOrder)
    if(updatedOrder.id){
        res.status(200).json(updatedOrder)
    } else{
        res.status(404).json("Sorry there is NO Order found with that ID");
    }
});

module.exports = orders;