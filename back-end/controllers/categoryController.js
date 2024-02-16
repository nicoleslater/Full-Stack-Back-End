const express = require("express");

const {
    getAllCategories,
    getOneCategory
    
} = require("../queries/categories");

const category = express.Router();
const { checkName, checkBoolean } = require("../validations/")