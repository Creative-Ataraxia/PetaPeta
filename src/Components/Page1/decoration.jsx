import { useState, useRef, useEffect } from 'react';
import Images from '@/Components/Utils/importImages.js'
import './decoration.css';

function Decoration() {
    const [elements, setElements] = useState([]);
    const textElements = useRef([]);
  
    useEffect(() => {
      const textNodes = document.querySelectorAll('body *');
      const elements = Array.from(textNodes).filter((node) => {
        const nodeStyle = window.getComputedStyle(node);
        return (
          node.nodeName !== 'SCRIPT' &&
          node.nodeName !== 'STYLE' &&
          nodeStyle.display !== 'none' &&
          nodeStyle.visibility !== 'hidden' &&
          node.textContent.trim().length > 0
        );
      });
      textElements.current = elements.map((element) => element.getBoundingClientRect());
    }, []);
  
    const loadImages = () => {
      const MAX_ELEMENTS = 16;
      let newElements = [...elements];
  
      if (newElements.length >= MAX_ELEMENTS) {
        const deleteCount = 4;
        const deleteStart = Math.floor(Math.random() * (newElements.length - deleteCount));
        newElements.splice(deleteStart, deleteCount);
      }
  
      for (let i = 0; i < 4; i++) {
        const id = Date.now() + i;
        let x = `${Math.random() * 80 + 10}%`;
        let y = `${Math.random() * 80 + 10}%`;
  
        textElements.current.forEach((element) => {
          const distance = Math.sqrt(
            Math.pow(element.left - x, 2) + Math.pow(element.top - y, 2)
          );
          if (distance < 300) {
            x = `${Math.random() * 80 + 10}%`;
            y = `${Math.random() * 80 + 10}%`;
          }
        });
  
        const size = `${Math.random() * 60 + 20}px`;
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        const image = [Images.thumbsUp, Images.logo, Images.thumbsUp, Images.logo][Math.floor(Math.random() * 4)];
        newElements.push({ id, x, y, size, color, image });
      }
      setElements(newElements);
    };
  
    return (
      <div className="decoration">
        <div className="add-image">
          <button className="add-image-button" onClick={loadImages}>点我</button>
        </div>
        {elements.map((element) => (
          <div
            key={element.id}
            className="decoration-element"
            style={{
              left: element.x,
              top: element.y,
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              backgroundImage: `url(${element.image})`,
            }}
          />
        ))}
      </div>
    );
  }
  
  export default Decoration;

