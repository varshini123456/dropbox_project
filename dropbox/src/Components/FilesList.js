import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from '../redux/actions/fileActions';
import { Box, List, ListItemButton, ListItemText, Typography, ListItemIcon } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';

function FilesList({ onSelectFile, selectedFile }) {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom color="primary">Uploaded Files</Typography>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <List component="nav" sx={{ bgcolor: "#f0f4f8", borderRadius: 2 }}>
        {list.length > 0 && list.map(file => {
          const isImage = /\.(jpg|jpeg|png)$/i.test(file.filename);
          return (
            <ListItemButton
              key={file._id}
              onClick={() => onSelectFile(file)}
              selected={selectedFile && selectedFile._id === file._id}
              sx={{
                mb: 1,
                borderRadius: 1,
                ...(selectedFile && selectedFile._id === file._id && {
                  bgcolor: "primary.main",
                  color: "#26c6da",
                  '&:hover': { bgcolor: "primary.dark" }
                })
              }}
            >
              <ListItemIcon sx={{ color: selectedFile && selectedFile._id === file._id ? "#26c6da" : "primary.main" }}>
                {isImage ? <ImageIcon /> : <InsertDriveFileIcon />}
              </ListItemIcon>
              <ListItemText primary={file.originalname} />
            </ListItemButton>
          );
        })}
        {list.length === 0 && <Typography color="text.secondary" sx={{ p: 2 }}>No files uploaded yet.</Typography>}
      </List>
    </Box>
  );
};

export default FilesList;