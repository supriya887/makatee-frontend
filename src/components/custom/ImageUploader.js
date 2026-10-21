"use client";

import React, { useState } from "react";
import { uploadProfileFilesApi } from "@/api";
import toast from "react-hot-toast";

const ImageUploader = ({ onUploadComplete, error }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFile = async (file) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const formData = new FormData();
    formData.append("files[]", file);

    try {
      const response = await uploadProfileFilesApi(formData);
      onUploadComplete(response?.data?.list);
      toast?.success(response?.msg);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Image upload failed.");
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="upload-img-area">
      <h6>Upload Your Image</h6>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className="upload-filed"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            id="upload"
            hidden
            accept="image/*"
            onChange={handleInputChange}
          />
          <label htmlFor="upload">Choose File</label>
        </div>
      </form>

      <span>JPEG 100 x 100</span>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
};

export default ImageUploader;
