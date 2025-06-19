const File = require('../models/FileSchema');
const fs = require('fs');
const path = require('path');

const uploadFile = async (req, res) => {
    req.file.path = path.join(__dirname, '..', 'uploads', req.file.filename);
    const file = new File(req.file);
    await file.save();
    res.status(200).json(file);
};

const getFiles = async (req, res) => {
    const files = await File.find();
    res.status(200).json(files);
};

const downloadFile = async (req, res) => {
    const file = await File.findById(req.params.id);
    res.download(path.resolve(file.path), file.originalname);
};

module.exports = {
  uploadFile,
  getFiles,
  downloadFile
};