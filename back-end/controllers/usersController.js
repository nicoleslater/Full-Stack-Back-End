const express = require("express");

const {
    getAllUsers,
    getOneUser,
    createUser, 
    deleteUser, 
    updateUser
} = require("../queries/users");

