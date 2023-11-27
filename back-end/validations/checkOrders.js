// const checkName = (req, res, next) => {
//     if(req.body.name){
//         console.log("Name is OK")
//         next()
//     } else{
//         res.status(400).json({ error: "Name is required!"})
//     }
// }

// const checkBoolean = (req, res, next) => {
//     if(req.body.pick_up === true || req.body.pick_up === false){
//         next()
//     } else{
//         res.status(400).json({ error: "pick_up must be a boolean value" })
//     }
// }

// module.exports = {
//     checkName, 
//     checkBoolean
// }