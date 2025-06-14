const multer = require('multer');
const { uploadDir } = require('../config/storage');

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024}
});

module.exports = upload;

