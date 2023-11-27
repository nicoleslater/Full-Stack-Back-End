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
        const oneOrder = await db.one("SELECT * FROM orders WHERE id=$1", id)
        return oneOrder
    } catch(error){
        return error
    }
};

const createOrder = async (order) => {
    try{
        const createdOrder = await db.one("INSERT INTO orders (order_date, total_price, delivery_date, pick_up) VALUES ($1, $2, $3, $4) RETURNING *", 
        [order.order_date, order.total_price, order.delivery_date, order.pick_up])
        return createdOrder
    } catch(error){
        return error
    }
}

const deleteOrder = async (order_id) => {
    try{
        const deletedOrder = await db.one(
            "DELETE from orders WHERE id = $1 RETURNING *", 
            order_id
        )
        return deletedOrder
    } catch(error){
        return error
    }
}

const updateOrder = async (order_id, order) => {
   try{
        const {order_date, total_price, delivery_date, pick_up} = order;
        const updatedOrder = await db.one(
            "UPDATE orders SET order_date=$1, total_price=$2, delivery_date=$3, pick_up=$4 WHERE id=$5 RETURNING *",
            [order_date, total_price, delivery_date, pick_up, order_id]
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
    updateOrder
}