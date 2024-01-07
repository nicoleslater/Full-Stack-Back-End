const express = require("express");

const orders = express.Router({ mergeParams: true });

const { getOneUser } = require("../queries/users");

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



//  Show
orders.get("/", async (req, res) => {
    const { user_id } = req.params;
    try {
      const user = await getOneUser(user_id);
      const allOrders = await getAllOrders(user_id);
      res.json({ ...user, allOrders });
    } catch (err) {
      res.json(err);
    }
  });

// Index 
orders.get("/:order_id", async (req, res) => {
   const { order_id, user_id } = req.params;
try{
    const order = await getOneOrder(order_id);
    const user = await getOneUser(user_id);
    if(order.id){
        res.json({ ...user, order })
    }
} catch(err){
    res.json(err);
}
  
});


// Post
orders.post("/", async (req, res) => {
    try{
        const { user_id } = req.params;
        const createdOrder = await createOrder(user_id, req.body)
        req.json(createdOrder);
    } catch(err){
        res.status(400).json( { error: "NOOOOOOO! "});
    }
});

// Delete
orders.delete("/:order_id", async (req, res) => {
    try{
        const { order_id } = req.params;
        const deletedOrder = await deleteOrder(order_id);
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
    const { id, user_id } = req.params;
    const updatedOrder = await updateOrder({ order_id, id, ...req.body });
    if(updatedOrder.id){
        res.status(200).json(updatedOrder);
    } else{
        res.status(404).json("Sorry there is NO Order found with that ID");
    }
});

module.exports = orders;