import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function FileDownload({ fileId, filename }) {
  const handleDownload = () => {
    const url = `http://localhost:5000/api/files/${fileId}/download`;
    // Create a temporary link and trigger click
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      onClick={handleDownload}
      sx={{ mt: 2 }}
    >
      Download
    </Button>
  );
}

export default FileDownload;