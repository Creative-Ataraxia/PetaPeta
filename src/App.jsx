import React, { useState } from 'react';
import Header from './Components/header.jsx';
import ImageUpload from './Components/uploadBox.jsx';
import Options from './Components/options.jsx';
import GenerateImage from './Components/generate.jsx';
import Decoration from './Components/decoration.jsx'

function App() {
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
      <Decoration/>
      <Header/>
      <ImageUpload onImageUpload={handleImageUpload} />
      <Options/>
      <GenerateImage uploadedImage={uploadedImage} selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
