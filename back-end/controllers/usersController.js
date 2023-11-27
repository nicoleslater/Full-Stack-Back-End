const express = require("express");

const {
    getAllUsers,
    getOneUser,
    createUser, 
    deleteUser, 
    updateUser,
} = require("../queries/users");

const ordersController = require("../controllers/ordersController");

const { checkName, checkBoolean } = require("../validations/checkUsers");

const users = express.Router();

users.use("/:user_id/orders", ordersController);

users.get(":/id", async (req, res) => {
    const { id } = req.params;
    const oneUser = await getOneUser(id)
    if(oneUser){
        res.json(oneUser)
    } else{
        res.status(404).json({ error: "Sorry that user is not found!"});
    }
});

users.get("/", async (req, res) => {
    const allUsers = await getAllUsers();
    if(allUsers[0]){
        res.status(200)
        .json({ success: true, data: { payload: allUsers } });
    } else{
        res.status(404)
        .json({ success: false, data: { error: "Error with the Server, please try again!" } });
    }
});

users.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdUser = await createUser(req.body);
        res.json(createdUser)
    } catch(error){
        res.status(404).json({ error: "Please go Back there is a server error!"});
    }
});

users.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deletedUser = await deleteUser(id);
        if(deletedUser){
            res.status(200).json({ success: true, payload: { data: deletedUser, }})
        } else {
            res.status(404).json("Sorry that user is not found!");
        }
    } catch(err){
        res.send(err)
    }
});

users.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUser = await updateUser(id, req.body);
    if(updatedUser.id){
        res.status(200).json(updatedUser);
    } else{
        res.status(404).json("NO user found with that ID");
    }
});

module.exports = users;