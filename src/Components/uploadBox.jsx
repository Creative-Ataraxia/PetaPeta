import React from 'react';
import './uploadBox.css';

function ImageUpload(props) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    props.onImageUpload(file);
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    props.onImageUpload(file);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
    event.target.classList.add('drag-over');
  }

  const handleDragLeave = (event) => {
    event.target.classList.remove('drag-over');
  }

  return (
    <div
      className="image-upload"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <label htmlFor="image-upload" className="upload-button">
        上传图片
        <input type="file" accept="image/*" id="image-upload" onChange={handleImageUpload} multiple={false} />
      </label>
      <p>或者拖放一张图片</p>
    </div>
  );
}

export default ImageUpload;

