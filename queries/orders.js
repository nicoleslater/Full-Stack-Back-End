const db = require("../db/dbConfig");

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
        const createdOrder = await db.one("INSERT INTO orders (orderDate, name, price, delivery, pickUp) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [order.orderDate, order.name, order.price, order.delivery, order.pickUp])
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
        const { orderDate, name, price, delivery, pickUp} = order;
        const updatedOrder = await db.one(
            `UPDATE orders SET orderDate=$1, name=$2, price=$3, delivery=$4, pickUp=$5, WHERE id=$6 RETURNING *`,
            [orderDate, name, price, delivery, pickUp, id]
            );
            return updatedOrder
   } catch(err){
    return err
   }
};

module.exports = {
    getOneOrder, 
    createOrder, 
    deleteOrder, 
    updateOrder,
}