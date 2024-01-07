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