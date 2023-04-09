import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './page2Body.css';
import placeholder1 from '@/assets/images/octo.jpg';
import placeholder2 from '@/assets/images/octo.jpg';
import placeholder3 from '@/assets/images/octo.jpg';
import placeholder4 from '@/assets/images/octo.jpg';

function Page2Body() {

    const [showOldImage, setShowOldImage] = useState(true);

    const toggleImageSet = () => {
      setShowOldImage(!showOldImage);
    };
  
    const handleOldImageClick = () => {
      setShowOldImage(true);
    };
  
    const handleNewImageClick = () => {
      setShowOldImage(false);
    };

  const handleSaveClick = () => {
    const link = document.createElement('a');
    link.download = 'image.jpg';
    link.href = document.getElementById('image-box').toDataURL('image/jpg');
    link.click();
  };

  const handleShareClick = () => {
    // code here to call API to share to social networks
  };

  return (
    <div className="page2-body">
      <div className="bodyLeft">
        <div className="image-labels">
					<p className={showOldImage ? 'active' : ''} onClick={handleOldImageClick}>原始图片</p>
					<p className={!showOldImage ? 'active' : ''} onClick={handleNewImageClick}>已生成图片</p>
        </div>
        <div className="image-box" id="image-box">
            {showOldImage ? (
            <img src={placeholder1} alt="Old Image"/>
            ) : (
						<div className="image-grid">
                <img src={placeholder2} alt="New Image 1"/>
                <img src={placeholder3} alt="New Image 2"/>
                <img src={placeholder4} alt="New Image 3"/>
                <img src={placeholder2} alt="New Image 4"/>
            </div>
            )}
        </div>
        <div className="satisfaction">
            <p>对这个结果满意吗？</p>
            <img id="thumbup" src="src/assets/images/thumbs-up-100.png" className="thumbup" alt="thumbs up"/>
            <img id="thumbdown" src="src/assets/images/thumbs-down-100.png" alt="thumbs down"/>
        </div>
      </div>
      <div className="bodyRight">
        <div>
          <Link to="/" className="close-button">
            <img src="src/assets/images/close-window-100.png" alt="Close" />
          </Link>
        </div>
        <div className="actions">
            <button className="save" onClick={handleSaveClick}>下载/保存</button>
            <button className="share" onClick={handleShareClick}>分享</button>
            <div className="add-concepts">
                <img id="concept-img1" src="src/assets/images/addConcept1.jpg" alt="add concepts icon"/>
                <img id="concept-img2" src="src/assets/images/addConcept2.jpg" alt="add concepts icon"/>
                <img id="concept-img3" src="src/assets/images/addConcept3.jpg" alt="add concepts icon"/>
                <a href="https://example.com">添加创意</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page2Body;
