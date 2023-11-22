const db = require("../db/dbConfig");

const getAllUsers = async () => {
    // try & catch db.any
}

const getOneUser = async () => {
    // try & catch db.one
}

const createUser = async (user) => {
    // try & catch db.one
}

const deleteUser = async (user_id) => {
    //  try & catch db.one
}

const updateUser = async (user_id, user) => {
    // try & catch db.one
}

module.exports = { 
    getAllUsers, 
    getOneUser, 
    createUser, 
    deleteUser, 
    updateUser
}