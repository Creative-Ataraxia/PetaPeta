import React from 'react';
import Page2Header from './page2Header.jsx';
import Page2Body from './page2Body.jsx';
import './page2Index.css';

function Page2Index() {
  return (
    <div className="page2index">
      <Page2Header />
      <Page2Body />
      <footer className="page2-footer">
        <p>Brought to you by the PetaPeta Team 🚀</p>
      </footer>
    </div>
  );
}

export default Page2Index;

