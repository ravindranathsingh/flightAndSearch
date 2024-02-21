const express = require("express")
const { PORT } = require("./config/serverConfig")

const setUpAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at port: ${PORT}`)
    })
}

setUpAndStartServer();