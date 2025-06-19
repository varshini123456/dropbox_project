export const fetchFiles = () => async dispatch => {
  dispatch({ type: "FETCH_FILES_REQUEST" });
  try {
    const res = await fetch("http://localhost:5000/api/files");
    const data = await res.json();
    dispatch({ type: "FETCH_FILES_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "FETCH_FILES_FAILURE", payload: err.message });
  }
};

export const uploadFile = (formData) => async dispatch => {
  try {
    const res = await fetch("http://localhost:5000/api/files", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    dispatch({ type: "UPLOAD_FILE_SUCCESS", payload: data });
  } catch (err) {
    console.error("File upload failed:", err);
  }
};
