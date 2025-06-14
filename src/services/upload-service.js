const UploadRepository = require('../repositories/upload-repository');
const JobQueue = require('../utils/jobQueue');
class UploadService {
    constructor() {
        this.uploadRepository = new UploadRepository();
        this.jobQueue = new JobQueue();
    }

    async handleUpload(file, metaDataJson) {
        try {
            const metadata = JSON.parse(metadataJson);
            const upload = await this.uploadRepository.create({
                filename: file.originalname,
                metadata,
                status: 'processing',
                progress: 0,
                stored_path: file.path
            });
            this.jobQueue.add(upload.id);
            return upload;
        } catch (error) {
            console.log('Something went wrong in the service layer');
            throw { error };
        }
    }

    async getStatus(id) {
        try {
            const status = await this.uploadRepository.findById(id);
            return status;
        } catch (error) {
            console.log('Something went wrong in the service layer');
            throw { error };
        }
    }

    async listFiles() {
        try {
            const lists = await this.uploadRepository.findAll();
        } catch (error) {
            console.log('Something went wrong in the service layer');
            throw { error };
        }
    }
}

module.exports = UploadService;