const db = require("../db/dbConfig");

const getAllProducts = async () => {
   try{
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts
     } catch(err){
        return err
     }
};

const getOneProduct = async (product_id) => {
    // try & catch db.one
    try{
        const oneProduct = await db.one("SELECT * FROM products WHERE product_id=$1", product_id)
        return oneProduct
    } catch(error){
        return error
    }
};

const createProduct = async (product) => {
    // try & catch db.one
    try{
        const createdProduct = await db.one("INSERT INTO products (name, description, price, stocked, ingredients, inventory, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
        [product.name, product.description, product.price, product.stocked, product.ingredients, product.inventory, product.category])
        return createdProduct
    } catch(error){
        return error
    }
};

const deleteProduct = async (product_id) => {
    // try & catch db.one
    console.log(`<------ Deleting ${product_id}`)
    try{
        const deletedProduct = await db.one(
            "DELETE from products WHERE product_id = $1 RETURNING *",
            product_id
        );
        return deletedProduct
    } catch(error){
        return error
    }
};

const updateProduct = async (product_id, product) => {
    // try & catch db.one
    try{
        const { name, description, price, stocked, ingredients, inventory, category } = product;
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, description=$2, price=$3, stocked=$4, ingredients=$5, inventory_count=$6, category=$7 WHERE product_id=$8 RETURNING *",
            [name, description, price, stocked, ingredients, inventory, category, product_id]
        );
        return updatedProduct
    } catch(err){
        return err
    }
};

module.exports = {
    getAllProducts, 
    getOneProduct, 
    createProduct,
    deleteProduct,
    updateProduct,
}