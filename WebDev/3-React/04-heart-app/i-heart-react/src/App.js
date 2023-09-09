// import components
import Header from './components/Header.js';
import HeartsList from './components/HeartsList.js';

// import CSS
import './App.css';

// Javascript variables
const headerText = 'I ❤️ React';

// stateless component that gets invoked within the index.js file
function App(props) {

  // invoke the Header component pasing in the msg prop
  return (
    // Fragment <> </>: like a div but less data for the virtual DOM
    <>
      <Header msg={headerText}/>
      <HeartsList />
    </>
  ) 
}

export default App;