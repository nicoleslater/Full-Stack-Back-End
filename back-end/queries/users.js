const db = require("../db/dbConfig");

const getAllUsers = async () => {
    try{
        const allUsers = await db.any("SELECT * FROM users");
            return allUsers
        } catch(err){
            return err
        }
    }


const getOneUser = async (id) => {
    try{
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
        return oneUser
    } catch(error){
        return error
    }
};

const createUser = async (user) => {
    try{
        const createdUser = await db.one("INSERT INTO users (first_name, last_name, email, shipping_address, preferred_delivery) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [user.first_name, user.last_name, user.email, user.shipping_address, user.preferred_delivery])
        return createdUser
    } catch(error){
        return error
    }
};

const deleteUser = async (id) => {
    try{
        const deletedUser = await db.one(
            "DELETE from users WHERE id = $1 RETURNING *", 
            id
        );
        return deletedUser
    } catch(error){
        return error
    }
};

const updateUser = async (id, user) => {
   try{
        const { first_name, last_name, email, shipping_address, preferred_delivery } = user;
        const updatedUser = await db.one(
            "UPDATE users SET first_name=$1, last_name=$2, email=$3, shipping_address=$4 preferred_delivery=$5 WHERE id=$6 RETURNING *",
            [first_name, last_name, email, shipping_address, preferred_delivery, id]
            );
            return updatedUser
   } catch(err){
    return err
   }
};

module.exports = {
    getAllUsers, 
    getOneUser, 
    createUser, 
    deleteUser, 
    updateUser
}