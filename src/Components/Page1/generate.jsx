import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './generate.css';

function GenerateImage(props) {
  const [generateButtonText, setGenerateButtonText] = useState('生成画作');
  const navigate = useNavigate();

  const handleGenerateImage = () => {
    setGenerateButtonText('生成中...');
    setTimeout(() => {
      navigate('/page2index');
    }, 1500);
  }

  return (
    <div id="gen-button-container">
      <button id="generateButton" onClick={handleGenerateImage}>
        {generateButtonText}
      </button>
      <p id="disclaimer">上传图片或URL，表示您同意我们的服务条款。本网站受到XXXXXXXX及其隐私政策保护，并适用服务条款</p>
    </div>
  );
}

export default GenerateImage;

