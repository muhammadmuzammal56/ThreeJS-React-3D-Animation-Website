// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';
import Loader from './components/Loader';
import Macbook from './components/Macbook'; // Import the new MacPage component
import { useRef } from 'react';
import Footer from './components/Footer';
import Ipad from './components/Ipad';

function HomePage() {
  const WebgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
        {/* <Footer /> */}
      </div>
      <WebgiViewer contentRef={contentRef} ref={WebgiViewerRef} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mac" element={<Macbook />} />
        <Route path="/ipad" element={<Ipad />} />
      </Routes>
    </Router>
  );
}

export default App;
