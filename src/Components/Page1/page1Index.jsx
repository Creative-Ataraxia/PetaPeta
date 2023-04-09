import React, { useState } from 'react';
import Header from './header.jsx';
import ImageUpload from './uploadBox.jsx';
import Options from './options.jsx';
import GenerateImage from './generate.jsx';
import Decoration from './decoration.jsx'

function Page1Index() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleImageUpload = (file) => {
    setUploadedImage(file);
  }

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  }

  return (
    <div>
      <Header/>
      <ImageUpload onImageUpload={handleImageUpload} />
      <Options/>
      <GenerateImage uploadedImage={uploadedImage} selectedOptions={selectedOptions} />
    </div>
  );
}

export default Page1Index;
