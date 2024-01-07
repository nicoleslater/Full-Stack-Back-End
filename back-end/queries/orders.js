const db = require("../db/dbConfig");

const getAllOrders = async (user_id) => {
    try{
        const allOrders = await db.any("SELECT * FROM users WHERE user_id=$1", user_id ); 
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
   const { name, order_date, total_price, delivery_date, pick_up, pick_up_date } = order;
   const createdOrder = await db.one(`INSERT INTO orders (name, order_date, total_price, delivery_date, pick_up, user_id)
   VALUES
   ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
   [ name, order_date, total_price, delivery_date, pick_up, pick_up_date, user_id ]);
   return createdOrder
} catch(err){
    return err
}
}

const deleteOrder = async (order_id) => {
    try{
        const deletedOrder = await db.one(
            "DELETE from orders WHERE order_id = $1 RETURNING *", 
            order_id
        );
        return deletedOrder
    } catch(error){
        return error
    }
}

const updateOrder = async (order) => {
   try{
        const { order_date, name, total_price, delivery_date, pick_up, id, user_id } = order;
        const updatedOrder = await db.one(
            `UPDATE orders SET order_date=$1, name=$2, total_price=$3, delivery_date=$4, pick_up=$5, user_id=$6 WHERE id=$8 RETURNING *`,
            [name, order_date, total_price, delivery_date, pick_up, pick_up_date, user_id, order_id]
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