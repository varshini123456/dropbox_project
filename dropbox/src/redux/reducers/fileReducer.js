const initialState = {
  list: [],
  loading: false,
  error: null
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FILES_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_FILES_SUCCESS":
      return { ...state, loading: false, list: action.payload };
    case "FETCH_FILES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPLOAD_FILE_SUCCESS":
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
};

export default fileReducer;
// This reducer handles the state of files in the application.
// It manages the list of files, loading state, and any errors that occur during file operations