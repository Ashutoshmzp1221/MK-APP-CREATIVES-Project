const { sequelize, DataTypes } = require('../config/db');

const Upload = sequelize.define('Upload', {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  filename: DataTypes.STRING,
  metadata: DataTypes.JSON,
  status: DataTypes.STRING,
  progress: DataTypes.INTEGER,
  error: DataTypes.STRING,
  stored_path: DataTypes.STRING
}, { timestamps: true });

module.exports = Upload;
