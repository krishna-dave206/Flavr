import React, { useState } from 'react';
import './upload.css'; // Importing the CSS

const Upload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e) => {
    const image = e.target.files[0];

    if (!image) {
      alert('Please select an image!');
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', image);

    const apiKey = '0e0a0d0ef5cfdcd5224aa8c1d4558950'
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setImageUrl(result.data.url);
        setShowImage(false);
      } else {
        alert('Upload failed.');
      }
    } catch (err) {
      alert('Something went wrong.');
      console.error(err);
    }

    setIsUploading(false);
  };

  return (
    <div className="upload-container">
      <h2>Upload Post</h2>

      <input type="file" onChange={handleUpload} />
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      {isUploading && <p className="uploading">Uploading...</p>}

      {imageUrl && !showImage && (
        <button className="view-button" onClick={() => setShowImage(true)}>
          Click here to view
        </button>
      )}

      {showImage && (
        <div className="image-preview">
          <img src={imageUrl} alt="Uploaded" />
          <p className="caption">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
