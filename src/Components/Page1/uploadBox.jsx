import React, { useState } from 'react';
import './uploadBox.css';

function ImageUpload(props) {

  const [buttonText, setButtonText] = useState('上传图片');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    props.onImageUpload(file);
    setButtonText('换一张?');
    const url = URL.createObjectURL(file);
    const imageBox = document.getElementById('upload-image-box');
    const image = new Image();
    image.src = url;
    imageBox.appendChild(image);
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
      <div id="upload-image-box"></div>
      <label htmlFor="image-upload-button" className="upload-button" >
        {buttonText}
        <input type="file" accept="image/*" id="image-upload-button" onChange={handleImageUpload} multiple={false}/>
      </label>
      <p>或者拖放一张图片</p>
    </div>
  );
}

export default ImageUpload;

