const express = require('express');
const multer = require('multer');
const router = express.Router();
const cors = require('cors');

const fileController = require('../controllers/fileController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['text/plain', 'application/json', 'image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Unsupported file type'));
  }
});

router.post('/api/files',  upload.single('file'), cors(), fileController.uploadFile);
router.get('/api/files', cors(), fileController.getFiles);
router.get('/api/files/:id/download', cors(), fileController.downloadFile);

module.exports = router;