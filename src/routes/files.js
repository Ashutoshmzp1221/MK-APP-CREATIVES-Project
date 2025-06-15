const express = require('express');
const uploadController = require('../controllers/upload-controllers');
const router = express.Router();

router.get('/', uploadController.listFiles);
router.get('/status/:id', uploadController.getStatus);
router.get('/:id', uploadController.file);
router.get('/:id/download', uploadController.downloadFile);

module.exports = router;
