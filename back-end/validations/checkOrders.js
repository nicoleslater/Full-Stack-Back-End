const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is OK")
        next()
    } else{
        res.status(400).json({ error: "Name is required!"})
    }
}

const checkBoolean = (req, res, next) => {
    if(req.body.pickUp === true || req.body.pickUp === false){
        next()
    } else{
        res.status(400).json({ error: "pickUp must be a boolean value" })
    }
}

module.exports = {
    checkName, 
    checkBoolean
}