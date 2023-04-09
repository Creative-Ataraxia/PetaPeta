import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1Index from './Components/Page1/page1Index.jsx';
import Page2Index from './Components/Page2/page2Index.jsx';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/petapeta-UI-take2/" element={<Page1Index />} />
          <Route exact path="/petapeta-UI-take2/page2index" element={<Page2Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
