const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is OK")
        next()
    } else{
        res.status(404).json({ error: "Name is required!"})
    }
    
}

const checkBoolean = (req, res, next) => {
    if(req.body.delivery === true || req.body.delivery === false){
        next()
    } else{
        res.status(404).json({ error: "delivery must be a boolean value"})
    }
}

module.exports = {
    checkName, 
    checkBoolean
}