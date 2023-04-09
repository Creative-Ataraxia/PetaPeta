import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1Index from './Components/Page1/page1Index.jsx';
import Page2Index from './Components/Page2/page2Index.jsx';


function App() {
  return (
    <div>
      <Router basename='/PetaPeta/'>
        <Routes>
          <Route path="/" element={<Page1Index />} />
          <Route path="/page2index" element={<Page2Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// note: path="" designates all paths which can be referenced by any other elements that needs to path
