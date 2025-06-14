const { Upload } = require('../models/index');

class UploadRepository {
    async create(uploadData) {
        try {
            const upload = await Upload.create(uploadData);
            return upload;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error };
        }
    }

    async findById(id) {
        try {
            const find = await Upload.findByPk(id);
            return find;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error };
        }
    }

    async update(upload) {
        try {
            return Upload.save();
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error };
        }
    }

    async findAll() {
        try {
            const find = await Upload.findAll();
            return find;
        } catch (error) {
            console.log('Something went wrong in the repository layer');
            throw { error };
        }
    }
}

module.exports = UploadRepository;