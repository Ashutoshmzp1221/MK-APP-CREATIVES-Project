'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Upload.init({
    filename: DataTypes.STRING,
    metadata: DataTypes.JSON,
    status: DataTypes.STRING,
    progress: DataTypes.INTEGER,
    error: DataTypes.STRING,
    stored_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Upload',
  });
  return Upload;
};