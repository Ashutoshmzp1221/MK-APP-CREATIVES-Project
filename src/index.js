
const express = require('express');
const { sequelize } = require('./config/db');
const uploadRoutes = require('./routes/upload');
const fileRoutes = require('./routes/files');
require('./workers/processor');  
const { PORT } = require('./config/serverConfig')

const setUpAndStartServer = () => {
    const app = express();
    app.use(express.json());
    app.use('/upload', uploadRoutes);
    app.use('/files', fileRoutes);
    sequelize.sync();

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

setUpAndStartServer();
