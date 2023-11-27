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

const usersController = require("../controllers/usersController.js");

orders.use(":/users/:/id", usersController);

const { checkName, checkBoolean } = require("../validations/checkOrders.js");

// Users
// Orders
// Products


orders.get(":/id", async (req, res) => {
    const { order_id, user_id } = req.params;
    try{
        const order = await getOneOrder(order_id);
        const user = await getOneUser(user_id);
        if(order_id){
            res.json({ ...user, order });
        }
    } catch(err){
        res.json(err);
    }
});

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

orders.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const { user_id } = req.params;
        const createdOrder = await createOrder(user_id, req.body)
        res.json(createdOrder);
    } catch(err){
        res.status(400).json({ error: "Please go Back there is a server error!"});
    }
});

orders.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedOrder = await deleteOrder(order_id);
        if(deletedOrder){
            res.status(200).json({ 
                success: true, 
                payload: { data: deletedOrder,},
                });
        } else {
            res.status(404).json("Sorry that order is not found!");
        }
    } catch(err){
        res.send(err)
    }
});

orders.put("/:id", async (req, res) => {
    const { id, user_id } = req.params;
    const updatedOrder = await updateOrder( {user_id, id, ...req.body} );
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("NO Order found with that ID");
    }
});

module.exports = orders;