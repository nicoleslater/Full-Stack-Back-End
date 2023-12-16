const checkName = (req, res, next) => {
    if(req.body.first_name){
        console.log("Name is OK")
        next()
    } else{
        res.status(400).json({ error: "Name is required!"})
    }
    
}

const checkBoolean = (req, res, next) => {
    if(req.body.preferred_delivery === true || req.body.preferred_delivery === false){
        next()
    } else{
        res.status(400).json({ error: "preferred_delivery must be a boolean value"})
    }
}

module.exports = {
    checkName, 
    checkBoolean
}