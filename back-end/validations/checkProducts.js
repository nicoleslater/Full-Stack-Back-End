const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is OK")
        next()
    } else{
        res.status(400).json( { error: "Name is required!"})
    }
}

const checkBoolean = (req, res, next) => {
    if(req.body._in_stock === true || req.body._in_stock === false){
        next()
    } else{
        res.status(400).json( { error: "_in_stock must be a boolean value"})
    }
}

module.exports = {
    checkName, 
    checkBoolean
}