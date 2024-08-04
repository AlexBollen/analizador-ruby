"use client";
import { useState } from "react";

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
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

    const form = new FormData();
    form.set("file", file);

    const r = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });
    const data = await r.json();
    console.log(data);
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
