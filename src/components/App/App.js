import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import {Route, Switch, withRouter} from 'react-router-dom';

function App() {
  const [size, setSize] = React.useState({}); // ширина окна
  const ref = React.useRef(); // рэф App ширина окна

  // определяем ширину App
  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };
  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
 
  
  return (
    <div className="App" ref={ref}>
      
      <Header
        size={size}
        />
      {/* <Main/> */}
      {/* <Movies
        size={size}
        /> */}
      <SavedMovies
        size={size}
        />
      <Footer/>
    </div>
  );
}

export default App;
