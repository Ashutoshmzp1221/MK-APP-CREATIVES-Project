const uploadService = require('../services/upload-service');
const path = require('path');

const uploadFile = async (req, res) => {
  try {
    const upload = await uploadService.handleUpload(req.file, req.body.metadata);
    res.status(201).json({ 
        upload_id: upload.id, 
        status: 'processing',
        success: true,
        error : {}
    });
  } catch (err) {
    res.status(400).json({ 
        upload_id : {},
        status : 'failed',
        success: false,
        error: err.message 
    });
  }
};

const getStatus = async (req, res) => {
    try {
      const upload = await uploadService.getStatus(req.params.id);
  
      if (!upload) {
        return res.status(404).json({ 
          upload_id: {}, 
          status: 'not_found', 
          success: false, 
          error: 'File not found' 
        });
      }
  
      return res.status(200).json({
        upload_id: upload.id,
        status: upload.status,
        success: true,
        error: {}
      });
  
    } catch (err) {
      return res.status(500).json({ 
        upload_id: {}, 
        status: 'error', 
        success: false, 
        error: err.message 
      });
    }
  };
  

  const listFiles = async (req, res) => {
    try {
      const files = await uploadService.listFiles();
  
      return res.status(200).json({
        data: files,
        success: true,
        error: {},
        message: 'Files fetched successfully'
      });
  
    } catch (err) {
      return res.status(500).json({
        data: {},
        success: false,
        error: err.message,
        message: 'Failed to fetch files'
      });
    }
  };
  

  const downloadFile = async (req, res) => {
    try {
      const upload = await uploadService.getStatus(req.params.id);
  
      if (!upload || upload.status !== 'completed') {
        return res.status(404).json({
          data: {},
          success: false,
          error: 'File not ready',
          message: 'File not found or processing not completed'
        });
      }
  
      res.download(path.resolve(upload.stored_path), (err) => {
        if (err) {
          return res.status(500).json({
            data: {},
            success: false,
            error: err.message,
            message: 'Failed to download file'
          });
        }
      });
  
    } catch (err) {
      return res.status(500).json({
        data: {},
        success: false,
        error: err.message,
        message: 'Download failed due to internal error'
      });
    }
  };
  
module.exports = {
    uploadFile,
    listFiles,
    downloadFile,
    getStatus
}