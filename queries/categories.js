const db = require("../db/dbConfig");

const getOneCategory = async (id) => {
    try{
        const oneCategory = await db.one("SELECT * FROM category WHERE id=$1", id);
        return oneCategory
    } catch(error){
        return error
    }
};

const getAllCategories = async () => {
    try{
         const allCategories = await db.any("SELECT * FROM category");
         return allCategories
      } catch(err){
         return err
      }
 };

 module.exports = {
    getOneCategory, 
    getAllCategories
 }