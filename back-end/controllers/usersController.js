const express = require("express");

const {
    getAllUsers,
    getOneUser,
    createUser, 
    deleteUser, 
    updateUser
} = require("../queries/users");

const users = express.Router();

const { checkName, checkBoolean } = require("../validations/check")