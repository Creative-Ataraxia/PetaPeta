import { useState } from 'react';
import './options.css';
import option1Bg from '../assets/images/octo.jpg';
import option2Bg from '../assets/images/octo.jpg';
import option3Bg from '../assets/images/octo.jpg';

function Options(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = (value) => {
    if (selectedOptions.includes(value)) {
      const updatedOptions = selectedOptions.filter(option => option !== value);
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  }

  const options = [
    { label: '丙烯画', value: '1', background: option1Bg },
    { label: '油画', value: '2', background: option2Bg },
    { label: '水彩画', value: '3', background: option3Bg },
    { label: '极简', value: '4', background: option1Bg },
    { label: '蒸汽波', value: '5', background: option2Bg },
    { label: '超现实', value: '6', background: option3Bg },
    { label: '波洛克', value: '7', background: option1Bg },
    { label: '达利', value: '8', background: option2Bg },
    { label: '曼恩', value: '9', background: option3Bg },
  ];

  return (
    <div className="options">
      <div className="option-row">
        <div className="option-label">媒介</div>
        {options.slice(0, 3).map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
            style={{ backgroundImage: `url(${option.background})` }}
            onClick={() => handleButtonClick(option.value)}
          >
            <div className="option-label-bold">{option.label}</div>
          </button>
        ))}
      </div>
      <div className="option-row">
        <div className="option-label">风格</div>
        {options.slice(3, 6).map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
            style={{ backgroundImage: `url(${option.background})` }}
            onClick={() => handleButtonClick(option.value)}
          >
            <div className="option-label-bold">{option.label}</div>
          </button>
        ))}
      </div>
      <div className="option-row">
        <div className="option-label">大师</div>
        {options.slice(6, 9).map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
            style={{ backgroundImage: `url(${option.background})` }}
            onClick={() => handleButtonClick(option.value)}
          >
            <div className="option-label-bold">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;

