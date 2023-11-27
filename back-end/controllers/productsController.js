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

products.get(":/id", async (req, res) => {
    const { id } = req.params;
    const oneProduct = await getOneProduct(id)
    if(oneProduct){
        res.json(oneProduct)
    } else{
        res.status(404).json({ error: "Sorry that product does not exist!"});
    }
});

products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if(allProducts[0]){
    res.status(200)
    .json({ success: true, data: { error: "There is an error please go back!" } });
  }
});

products.post("/", checkName, checkBoolean, async (req, res) => {
    try{
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