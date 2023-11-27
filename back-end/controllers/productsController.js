const express = require("express");

const products = express.Router({ mergeParams: true });
const { getOneOrder } = require("../queries/orders.js");

const {
    getAllProducts, 
    getOneProduct, 
    createProduct, 
    deleteProduct, 
    updateProduct
} = require("../queries/products.js");

products.get(":/product_id", async (req, res) => {
    const { product_id, order_id } = req.params;
   try{
    const product = await getOneProduct(product_id);
    const order = await getOneOrder(order_id);
    if(product.id){
        res.json({ ...order, product });
    }
   } catch(err){
    res.json(err);
   }
});

products.get("/", async (req, res) => {
    const { product_id } = req.params;
        try{
            const order = await getOneOrder(order_id);
            const allProducts = await getAllProducts(order_id);
            res.json({ ...order, allProducts });
        } catch(err){
            res.json(err);
        }
});

products.post("/", async (req, res) => {
    try{
        const { order_id } = req.params;
        const createdProduct = await createProduct(order_id, req.body);
        res.json(createdProduct);
    } catch(error){
        res.status(404).json({ error: "Please go Back there is a server error!"});
    }
});

products.delete("/:product_id", async (req, res) => {
    try{
        const { product_id } = req.params;
        const deletedProduct = await deleteProduct(product_id);
        if(deletedProduct){
            res.status(200).json({ success: true, payload: { data: deletedProduct, }, });
        } else {
            res.status(404).json("Sorry product not found!");
        }
    } catch(err){
        res.send(err)
    }
});

products.put("/:id", async (req, res) => {
    const { id, order_id } = req.params;
    const updatedProduct = await updateProduct( {order_id, id, ...req.body} );
    if(updatedProduct.id){
        res.status(200).json(updatedProduct);
    } else{
        res.status(404).json("NO Product found with that ID");
    }
});

module.exports = products;