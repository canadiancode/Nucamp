import './App.css';

// Bootstrap:
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom components:
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
