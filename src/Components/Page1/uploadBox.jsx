import React, { useRef } from 'react';
import './uploadBox.css';

function ImageUpload(props) {

  const fileInput = useRef(null);

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

  const handleChooseFile = () => {
    fileInput.current.click();
  };

  return (
    <div
      className="image-upload"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <label htmlFor="image-upload-button" className="upload-button" >
        上传图片
      </label>
      <input type="file" accept="image/*" id="image-upload-button" onChange={handleImageUpload} multiple={false} ref={fileInput}/>
      <p>或者拖放一张图片</p>
    </div>
  );
}

export default ImageUpload;

