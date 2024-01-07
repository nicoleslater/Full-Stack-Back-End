const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT || 5566;
app.listen(PORT, () => {
    console.log(`
    Users live on port: ${PORT}
    Products live on port: ${PORT}
    Orders live on port: ${PORT}`
    )
});

