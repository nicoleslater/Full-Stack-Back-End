const express = require("express");

const {
    getAllProducts, 
    getOneProduct, 
    createProduct, 
    deleteProduct, 
    updateProduct,
} = require("../queries/products.js");

const { checkName, checkBoolean } = require("../validations/checkProducts.js");

const products = express.Router();

products.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const order = await getOneOrder(order_id);
        const allProducts = await getAllProducts(order_id);
        res.json({ ...order, allProducts });
    } catch(err){
        res.json(err);
    }
});

products.get(":/product_id", async (req, res) => {
    const { product_id, order_id } = req.params;
    // const oneProduct = await getOneProduct(id)
    try{
        const product = await getOneProduct(product_id);
        const order = await getOneOrder(order_id);
        if(product.id){
            res.json({ ...order, product});
        }
    } catch(err){
        res.json(err);
    }
});

products.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const { order_id } = req.params;
        const createdProduct = await createProduct(order_id, req.body);
        res.json(createdProduct)
    } catch(error){
        res.status(404).json({ error: "Please go Back there is a server error!" } );
    }
});

products.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id);
        if(deletedProduct){
            res.status(200).json({ success: true, payload: { data: deletedProduct, }, });
        } else{
            res.status(404).json("Sorry product not found!");
        }
    } catch(err){
        res.send(err)
    }
});

products.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await updateProduct( {id, ...req.body} );
    if(updatedProduct.id){
        res.status(200).json(updatedProduct);
    } else{
        res.status(404).json("NO Product found with that ID");
    }
});

module.exports = products;