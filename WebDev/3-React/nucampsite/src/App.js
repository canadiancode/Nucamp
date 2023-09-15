import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CampsitesDirectoryPage from './pages/campsitesDirecrtoryPage.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CampsitesDirectoryPage></CampsitesDirectoryPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
