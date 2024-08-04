"use client";
import { useState } from "react";

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("No file selected");
      return;
    }
    const fileExtension = file.name.split(".").pop();
    if (fileExtension !== "rb") {
      setError("Invalid file type. Please upload a .rb file.");
      return;
    }
    console.log(file);
    console.log(fileExtension);
    console.log("Uploading file!");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Upload file:</label>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default FileUploadForm;
