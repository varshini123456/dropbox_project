import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../redux/actions/fileActions';
import { Button, Box, Input, Typography, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleUpload = () => {
    if (!file) return setError('Please select a file to upload.');
    const isImage = /\.(jpg|jpeg|png)$/i.test(file.name);
    const isText = /\.(txt|json)$/i.test(file.name);
    if (!isImage && !isText) return setError('File type not supported. Please upload JPG, PNG, TXT, or JSON files.');
    setError('');
    const formData = new FormData();
    formData.append('file', file);
    dispatch(uploadFile(formData));
    setFile(null);
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3, bgcolor: "#e3f2fd" }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Input
          type="file"
          onChange={e => { setFile(e.target.files[0]); setError(''); }}
          sx={{ flex: 1, bgcolor: "white", borderRadius: 1, p: 1 }}
          inputProps={{ accept: '.jpg,.jpeg,.png,.txt,.json' }}
        />
        <Button
          onClick={handleUpload}
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          sx={{ minWidth: 120 }}
        >
          Upload
        </Button>
      </Box>
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Paper>
  );
};

export default FileUpload;