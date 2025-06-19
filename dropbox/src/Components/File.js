import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FileDownload from './FileDownload';

function File({ file }) {
  if (!file) return null;

  const fileUrl = `http://localhost:5000/uploads/${file.filename}`;
  const isImage = /\.(jpg|jpeg|png)$/i.test(file.filename);
  const isText = /\.(txt|json)$/i.test(file.filename);

  return (
    <Paper elevation={3} sx={{ mt: 4, p: 3, bgcolor: "#f8fafc" }}>
      <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
        File Preview: {file.originalname}
      </Typography>
      {isImage && (
        <Box sx={{ mb: 2 }}>
          <img src={fileUrl} alt={file.originalname} style={{ width: "100%", borderRadius: 8, maxHeight: 400, objectFit: "contain" }} />
        </Box>
      )}
      {isText && (
        <iframe
          title={file.originalname}
          src={fileUrl}
          width="100%"
          height="400px"
          style={{ border: "1px solid #e0e0e0", borderRadius: 8, marginBottom: 16 }}
        />
      )}
      <FileDownload fileId={file._id} filename={file.originalname} />
    </Paper>
  );
};

export default File;