import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImg from './images/desktop/image-header.jpg';
import arrowIcon from './images/icon-arrow-down.svg';

// Components
import Header from './Components/Header';

function App() {
  return (
    <div className="main">
      <Header />
      <img className="main-img" src={mainImg}></img>
      <div className="heading-container">
        <h1 className='main-title'>WE ARE CREATIVES</h1>
        <img className='arrow-img' src={arrowIcon}></img>
      </div>
    </div>
  );
}

export default App;
