const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is OK")
        next()
    } else{
        res.status(400).json({ error: "Name is required!"})
    }
    
}

const checkBoolean = (req, res, next) => {
    if(req.body.delivered === true || req.body.delivered === false){
        next()
    } else{
        res.status(400).json({ error: "delivery must be a boolean value"})
    }
}

module.exports = {
    checkName, 
    checkBoolean
}