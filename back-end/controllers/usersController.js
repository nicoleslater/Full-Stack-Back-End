const express = require("express");

const {
    getAllUsers,
    getOneUser,
    createUser, 
    deleteUser, 
    updateUser,
} = require("../queries/users.js");

const { checkName, checkBoolean } = require("../validations/checkUsers.js");

const users = express.Router();

// Index
users.get(":/id", async (req, res) => {
    const { id } = req.params
    const oneUser = await getOneUser(id);
    if (oneUser){
        res.json(oneUser)
    } else {
        res.status(404).json({error: "User with that ID is NOT found!"})
    }
});

// Show
users.get("/", async (req, res) => {
    const allUsers = await getAllUsers();
    if (allUsers[0]) {
        res.status(200)
        .json({ success: true, data: { payload: allUsers } });
    } else {
        res.status(500)
        .json({ success: false, data: { error: "Server Error!" } });
    }
});

// Post
users.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdUser = await createUser(req.body)
        res.json(createdUser)
    } catch (error) {
        res.status(400).json({error: "Show is NOT Available please come back to Users Controller!"})
    }
})

// Delete
users.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUser(id);
        if(deletedUser) {
            res.status(200).json({ success:true, payload: { data: deletedUser } })
        } else {
            res.status(404).json("User Not Found! Please go back to Delete(UsersController)")
        }
    } catch(err) {
        res.send(err)
    }
});

// Update
users.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUser = await updateUser( {id, ...req.body} );
    if(updatedUser.id) {
        res.status(200).json(updatedUser);
    } else (
        res.status(404).json("Sorry no User with that ID!")
    )
})

module.exports = users;