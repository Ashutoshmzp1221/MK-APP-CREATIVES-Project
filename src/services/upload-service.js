const UploadRepository = require('../repositories/upload-repository');
const jobQueue = require('../workers/processor');

class UploadService {
  constructor() {
    this.uploadRepository = new UploadRepository();
  }
  async handleUpload(file, metadataJson) {
    try {
        const metadata = JSON.parse(metadataJson);
        const upload = await this.uploadRepository.create({
          filename: file.originalname,
          metadata,
          status: 'processing',
          progress: 0,
          stored_path: file.path
        });
    
        jobQueue.add(upload.id);
        return upload;
    } catch (error) {
        console.log('Something went wrong in service layer');
        throw { error };
    }
  }

  async getStatus(id) {
    try {
        const status = await this.uploadRepository.findById(id);
        return status;
    } catch (error) {
        console.log('Something went wrong in service layer');
        throw { error };
    }
  }

  async listFiles() {
    try {
        const list = await this.uploadRepository.findAll();
        return list;
    } catch (error) {
        console.log('Something went wrong in service layer');
        throw { error };
    }
  }
}

module.exports = new UploadService();
