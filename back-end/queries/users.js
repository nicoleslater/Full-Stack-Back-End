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
        const createdUser = await db.one("INSERT INTO users (name, email, address, delivery) VALUES ($1, $2, $3, $4) RETURNING *", 
        [user.name, user.email, user.address, user.delivery])
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
        const { name, email, address, delivery } = user;
        const updatedUser = await db.one(
            "UPDATE users SET name=$1, email=$2, address=$3, delivery=$4 WHERE id=$5 RETURNING *",
            [name, email, address, delivery, id]
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