const db = require("../db/dbConfig");

const getAllProducts = async () => {
   try{
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts
     } catch(err){
        return err
     }
};

const getOneProduct = async (id) => {
    // try & catch db.one
    try{
        const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id)
        return oneProduct
    } catch(error){
        return error
    }
};

const deleteProduct = async (id) => {
    // try & catch db.one
    try{
        const deletedProduct = await db.one(
            "DELETE from products WHERE id = $1 RETURNING *",
            id
        );
        return deletedProduct
    } catch(error){
        return error
    }
};

const updateProduct = async (id, product) => {
    // try & catch db.one
    try{
        const { name, description, price, stocked, ingredients, inventory, category } = product;
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, description=$2, price=$3, stocked=$4, ingredients=$5, inventory_count=$6, category=$7 WHERE id=$8 RETURNING *",
            [name, description, price, stocked, ingredients, inventory, category, id]
        );
        return updatedProduct
    } catch(err){
        return err
    }
};

module.exports = {
    getAllProducts, 
    getOneProduct, 
    deleteProduct,
    updateProduct
}