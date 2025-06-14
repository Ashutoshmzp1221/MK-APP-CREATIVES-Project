const fs = require('fs');
const path = require('path');

const downloadFile = (filePath, res) => {
  const resolvedPath = path.resolve(filePath);

  fs.access(resolvedPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({
        message: 'File not found',
        data: {},
        success: false,
        err: {}
      });
    }

    return res.download(resolvedPath, (downloadErr) => {
      if (downloadErr) {
        return res.status(500).json({
          message: 'Failed to download file',
          data: {},
          success: false,
          err: downloadErr
        });
      }
    });
  });
};

module.exports = downloadFile;
