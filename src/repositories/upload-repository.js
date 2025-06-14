const Upload = require('../models/upload');

class UploadRepository {
  async create(uploadData) {
    try {
        const upload =  await Upload.create(uploadData);
        return upload;
    } catch (error) {
        console.log('Something went wrong in repository layer');
        throw { error };
    }
  }

  async findById(id) {
    try {
        const find = await Upload.findByPk(id);
        return find
    } catch (error) {
        console.log('Something went wrong in repository layer');
        throw { error };
    }
  }

  async update(upload) {
    try {
        return await upload.save();
    } catch (error) {
        console.log('Something went wrong in repository layer');
        throw { error };
    }
  }

  async findAll() {
    try {
        const find = await Upload.findAll();
        return find;
    } catch (error) {
        console.log('Something went wrong in repository layer');
        throw { error };
    }
  }
}

module.exports = new UploadRepository();
