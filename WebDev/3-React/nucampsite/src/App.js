import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CampsitesDirectoryPage from './pages/campsitesDirecrtoryPage.js';
import Footer from './components/Footer.js';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';

// For React Router
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='contact' element={<ContactPage/>} />
        <Route path='directory' element={<CampsitesDirectoryPage/>} />
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage/>} />
        <Route path='about' element={<AboutPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;