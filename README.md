# Dropbox Clone

This project is a simple Dropbox-like file upload and download application built with React (frontend) and Node.js/Express/MongoDB (backend).

---

## Features

- Upload images (`.jpg`, `.jpeg`, `.png`) and text files (`.txt`, `.json`)
- Preview uploaded files (images and text)
- Download files with their original names
- File list with selection and highlighting
- Modern UI with Material-UI

---

## Folder Structure

```
f:\Interview\Typeface\Assignment\
  dropbox_backend\   # Backend (Node.js/Express/MongoDB)
  dropbox\           # Frontend (React)
```

---

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account (or local MongoDB)

---

## Backend Setup (`dropbox_backend`)

1. **Install dependencies:**
   ```bash
   cd dropbox_backend
   npm install
   ```

2. **Configure MongoDB:**
   - The connection string is in `server.js`.  
     By default, it uses:
     ```
     mongodb+srv://varshini123456:varshini23@cluster0.n0vlfjz.mongodb.net/dropbox?retryWrites=true&w=majority&appName=Cluster0
     ```
   - **Change the username, password, and cluster address** if needed.

3. **Run the backend server:**
   ```bash
   npm run start
   ```
   - The server will run on [http://localhost:5000](http://localhost:5000)
   - Uploaded files are stored in the `uploads/` folder and served at `/uploads/filename`.

---

## Frontend Setup (`dropbox`)

1. **Install dependencies:**
   ```bash
   cd dropbox
   npm install
   ```

2. **Run the frontend app:**
   ```bash
   npm start
   ```
   - The app will run on [http://localhost:3000](http://localhost:3000)

3. **Usage:**
   - Upload files using the upload form.
   - Click on a file in the list to preview.
   - Download files using the "Download" button.

---

## Notes

- **CORS:**  
  CORS is enabled in the backend for development. If you deploy, adjust CORS settings as needed.
- **File Types:**  
  Only `.jpg`, `.jpeg`, `.png`, `.txt`, and `.json` files are allowed.
- **File Download:**  
  Files are downloaded with their original names.

---

## Troubleshooting

- **MongoDB connection errors:**  
  Double-check your MongoDB URI, username, password, and network access (IP whitelist in Atlas).
- **File not downloading with correct name:**  
  The backend uses `res.download(path, originalname)` to ensure the original filename is used.

---

## Project Structure

- **Backend**
  - `server.js` — Express server setup
  - `controllers/fileController.js` — File upload, list, and download logic
  - `models/FileSchema.js` — Mongoose schema for files
  - `routes/fileRoutes.js` — API routes
  - `uploads/` — Uploaded files

- **Frontend**
  - `src/Components/` — React components for upload, list, preview, and download
  - `src/redux/` —