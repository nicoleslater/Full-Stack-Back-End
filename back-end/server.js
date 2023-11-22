const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 5566;
app.listen(PORT, () => {
    console.log(`Products live on port: ${PORT}`)
})