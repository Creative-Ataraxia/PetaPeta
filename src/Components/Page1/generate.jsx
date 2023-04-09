import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './generate.css';

class GenerateImage extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null
  }

  handleGenerateImage = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        body: JSON.stringify({
          image: this.props.uploadedImage,
          options: this.props.selectedOptions
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('生成失败。。');
      }

      const images = await response.json();

      this.setState({ images, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div id="gen-button-container">
        <Link to="/page2index">
          <button id="generateButton" onClick={this.handleGenerateImage} disabled={isLoading}>
            {isLoading ? '生成中...' : '生成画作'}
          </button>
        </Link>
        {error && <p>{error.message}</p>}
        {images.length > 0 && (
          <div>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Generated image ${index + 1}`} />
            ))}
          </div>
        )}
        <p id="disclaimer">上传图片或URL，表示您同意我们的服务条款。本网站受到XXXXXXXX及其隐私政策保护，并适用服务条款</p>
      </div>
    );
  }
}

export default GenerateImage;

