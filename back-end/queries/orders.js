const db = require("../db/dbConfig");

const getAllOrders = async () => {
    try{
        const allOrders = await db.any("SELECT * FROM orders"); 
        return allOrders
        } catch(err){
            return err
        }
}


const getOneOrder = async (id) => {
    try{
        const oneOrder = await db.one("SELECT * FROM orders WHERE id=$1", id);
        return oneOrder
    } catch(error){
        return error
    }
};

const createOrder = async (order) => {
    try{
        const createdOrder = await db.one("INSERT INTO orders (orderDate, name, price, delivered, pickUp) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [order.orderDate, order.name, order.price, order.delivered, order.pickUp])
        return createdOrder
    } catch(error){
        return error
    }
};

const deleteOrder = async (id) => {
    try{
        const deletedOrder = await db.one(
            "DELETE from orders WHERE id = $1 RETURNING *", 
            id
        );
        return deletedOrder
    } catch(error){
        return error
    }
}

const updateOrder = async (id, order) => {
   try{
        const { orderDate, name, price, delivered, pickUp} = order;
        const updatedOrder = await db.one(
            `UPDATE orders SET orderDate=$1, name=$2, price=$3, delivered=$4, pickUp=$5, WHERE id=$6 RETURNING *`,
            [orderDate, name, price, delivered, pickUp, id]
            );
            return updatedOrder
   } catch(err){
    return err
   }
};

module.exports = {
    getAllOrders, 
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
}