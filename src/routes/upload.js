const express = require('express');
const multer = require('multer');
const { uploadDir } = require('../utils/storage');
const uploadController = require('../controllers/upload-controllers');

const router = express.Router();

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

router.post('/', upload.single('file'), uploadController.uploadFile);
module.exports = router;
