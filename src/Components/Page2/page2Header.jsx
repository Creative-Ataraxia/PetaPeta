import React, { useState, useRef, useEffect } from 'react';
import './page2Header.css';

function Page2Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="page2-header">
      <button className="new-creations-button" onClick={handleMenuClick}>新创作</button>
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} ref={drawerRef}>
        <p>祝各位即友都能成为独角兽！</p>
      </div>
    </header>
  );
}

export default Page2Header;

