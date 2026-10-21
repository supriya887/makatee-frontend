"use client";

import React, { useState } from "react";
import { uploadFilesApi } from "@/api";
import toast from "react-hot-toast";

const ImageCustUploader = ({
  onUploadComplete,
  imageName,
  imagePath,
  removeImage,
}) => {
  const handleFile = async (file) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const formData = new FormData();
    formData.append("files[]", file);

    try {
      const response = await uploadFilesApi(formData);
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
    <div>
      <strong>Upload Images/Logos</strong>
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className="upload-file"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              onClick={() => document.getElementById("upload").click()}
              style={{
                cursor: "pointer",
              }}
            >
              Choose Image
            </button>

            <input
              type="file"
              id="upload"
              accept=".jpg,.gif,.png"
              multiple={false}
              onChange={handleInputChange}
              style={{ display: "none" }} // ✅ fully hidden input
            />
          </div>
        </div>
      </form>

      {imageName && imagePath && (
        <div
          style={{
            marginTop: "12px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={imagePath}
            alt="Uploaded"
            style={{
              height: "60px",
              width: "60px",
              objectFit: "cover",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => window.open(imagePath, "_blank")}
          />

          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: "14px" }}>{imageName}</p>
            <a
              href={imagePath}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "12px", color: "#007bff" }}
            >
              View full image
            </a>
          </div>

          <button
            type="button"
            onClick={removeImage}
            style={{
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCustUploader;
