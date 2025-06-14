const UploadRepository = require('../repositories/uploadRepository');

class JobQueue {
  constructor() {
    this.uploadRepository = new UploadRepository;
    this.queue = [];
    setInterval(() => this.processNext(), 1000);
  }

  add(uploadId) {
    this.queue.push(uploadId);
  }

  async processNext() {
    if (this.queue.length === 0) return;
    const uploadId = this.queue.shift();
    const upload = await uploadRepository.findById(uploadId);
    if (!upload) return;

    try {
      for (let i = 1; i <= 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        upload.progress = i * 10;
        await uploadRepository.update(upload);
      }
      upload.status = 'completed';
      await uploadRepository.update(upload);
    } catch (err) {
      upload.status = 'failed';
      upload.error = err.message;
      await uploadRepository.update(upload);
    }
  }
}

module.exports = JobQueue;
