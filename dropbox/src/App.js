import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import FileUpload from "./Components/FileUpload";
import FilesList from "./Components/FilesList";
import File from "./Components/File";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f6fa", py: 6 }}>
      <Container maxWidth="sm">
        <Card elevation={4}>
          <CardContent>
            <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 700, color: "#1976d2" }}>
              Dropbox Clone
            </Typography>
            <FileUpload />
            <FilesList onSelectFile={setSelectedFile} selectedFile={selectedFile} />
            <File file={selectedFile} />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;