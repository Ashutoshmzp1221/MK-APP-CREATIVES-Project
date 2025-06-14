const UploadService = require('../services/upload-service');
const uploadService = new UploadService();
const downloadFileUtil = require('../utils/fileDownloader');
// const path = require('path');

const uploadFile = async (req, res) => {
    try {
        const uplaod = await uploadService.handleUpload(req.file, req.body.metadata);
        return res.status(201).json({
            message: 'File uploaded successfully',
            data: uplaod,
            success: true,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to upload file',
            data: {},
            success: false,
            err: error
        });
    }
}

const getUploadStatus = async (req, res) => {
    try {
        const upload = await uploadService.getStatus(req.params.id);
        if(!upload) {
            return res.status(404).json({
                message: 'Upload not found',
                data: {},
                success: false,
                err: {}
            });
        }
        return res.status(200).json({
            message: 'File status fetched successfully',
            data: upload,
            success: true,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to get upload status',
            data: {},
            success: false,
            err: error
        });
    }
}

const listUploads = async (req, res) => {
    try {
        const files = await uploadService.listFiles();
        return res.status(200).json({
            message: 'Files fetched successfully',
            data: files,
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to fetch files',
            data: {},
            success: false,
            err: error
        });
    }
}

const downloadFile = async (req, res) => {
    try {
      const upload = await uploadService.getStatus(req.params.id);
      if (!upload || upload.status !== 'completed') {
        return res.status(404).json({
          message: 'File not ready for download',
          data: {},
          success: false,
          err: {}
        });
      }
      return downloadFileUtil(upload.stored_path, res);
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to process download request',
        data: {},
        success: false,
        err: error
      });
    }
  };

module.exports = {
    createUpload,
    getUploadStatus,
    listUploads,
    downloadFile
};
