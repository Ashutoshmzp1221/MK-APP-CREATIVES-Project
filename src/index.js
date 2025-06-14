const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require("body-parser");

const setupAndStartServer = () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is started at port ${PORT}`);
    })
}

setupAndStartServer();

