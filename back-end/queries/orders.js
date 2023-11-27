const db = require("../db/dbConfig");

const getAllOrders = async (user_id) => {
    try{
        const allOrders = await db.any("SELECT * FROM orders WHERE user_id=$1", 
        user_id
        );
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

const createOrder = async (user_id, order) => {
    try{
        const { order_date, total_price, delivery_date, pick_up } = order;
        const createdOrder = await db.one("INSERT INTO orders (order_date, total_price, delivery_date, pick_up, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING * ", 
        [order_date, total_price, delivery_date, pick_up, user_id]
        );
        return createdOrder
    } catch(err){
        return err
    }
}

const deleteOrder = async (id) => {
    try{
        const deletedOrder = await db.one(
            "DELETE from orders WHERE id = $1 RETURNING * ", 
            id
        );
        return deletedOrder
    } catch(error){
        return error
    }
}

const updateOrder = async (order) => {
   try{
        const { order_date, total_price, delivery_date, pick_up, user_id, id} = order;
        const updatedOrder = await db.one(
            "UPDATE orders SET order_date=$1, total_price=$2, delivery_date=$3, pick_up=$4, user_id=$5 WHERE id=$6 RETURNING * ",
            [order_date, total_price, delivery_date, pick_up, user_id, id]
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