import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CampsitesDirectoryPage from './pages/campsitesDirecrtoryPage.js';
import Footer from './components/Footer.js';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { Route, Routes } from 'react-router-dom';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
  }, [dispatch]);

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